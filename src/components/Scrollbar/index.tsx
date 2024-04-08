import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import useTimeout from "@/hooks/useTimeout";
import style from "./style.module.scss";

export type ScrollbarDirection = "vertical" | "horizontal";

export type ScrollbarProps = {
  direction: ScrollbarDirection;
  margin: number | `${number}`;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type TrackPosition = Partial<
  Record<"top" | "right" | "bottom" | "left", number>
>;

const Scrollbar = React.forwardRef<HTMLDivElement, ScrollbarProps>(
  (props, ref) => {
    const contentsRef = useRef<HTMLDivElement>(null);
    const timeout = useTimeout();

    const [thumbSize, setThumbSize] = useState(0);
    const [thumbPosition, setThumbPosition] = useState("0%");
    const [trackPosition, setTrackPosition] = useState<TrackPosition>();

    const [needScrollbar, setNeedScrollbar] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isThumbDragging, setIsThumbDragging] = useState(false);

    const margin = useMemo(() => {
      const rem = `${Number(props.margin) / 16}rem`;
      if (props.direction === "vertical") return `0 ${rem}`;
      else return `${rem} 0`;
    }, [props.direction, props.margin]);

    const isThumbVisible =
      (isScrolling || isMouseOver || isThumbDragging) && trackPosition;

    const updateScrollbar = useCallback(() => {
      const $contents = contentsRef.current;
      const $container = $contents?.parentElement;
      if (!$contents || !$container) return;

      if (props.direction === "vertical") {
        updateVerticalScrollbar($contents, $container);
      } else {
        updateHorizontalScrollbar($contents, $container);
      }
    }, []);

    const updateVerticalScrollbar = (
      $contents: HTMLElement,
      $container: HTMLElement,
    ) => {
      if ($contents.scrollHeight === 0) return;

      const heightRatio = $contents.clientHeight / $contents.scrollHeight;
      const thumbSize = $contents.clientHeight * heightRatio;
      const topRatio = $contents.scrollTop / $contents.scrollHeight;
      const needScrollbar = $contents.scrollHeight !== $contents.clientHeight;

      const containerRect = $container.getBoundingClientRect();
      const contentsRect = $contents.getBoundingClientRect();

      setThumbSize(thumbSize);
      setThumbPosition(`${topRatio * 100}%`);
      setNeedScrollbar(needScrollbar);

      setTrackPosition({
        top: contentsRect.top - containerRect.top,
        bottom: containerRect.bottom - contentsRect.bottom,
      });
    };

    const updateHorizontalScrollbar = (
      $contents: HTMLElement,
      $container: HTMLElement,
    ) => {
      if ($contents.scrollWidth === 0) return;

      const widthRatio = $contents.clientWidth / $contents.scrollWidth;
      const thumbSize = $contents.clientWidth * widthRatio;
      const leftRatio = $contents.scrollLeft / $contents.scrollWidth;
      const needScrollbar = $contents.scrollWidth !== $contents.clientWidth;

      const containerRect = $container.getBoundingClientRect();
      const contentsRect = $contents.getBoundingClientRect();

      setThumbSize(thumbSize);
      setThumbPosition(`${leftRatio * 100}%`);
      setNeedScrollbar(needScrollbar);

      setTrackPosition({
        left: contentsRect.left - containerRect.left,
        right: containerRect.right - contentsRect.right,
      });
    };

    const handleScroll = (event: React.UIEvent) => {
      event.stopPropagation();
      event.preventDefault();

      updateScrollbar();
      setIsScrolling(true);
      timeout.set(() => setIsScrolling(false), 1000);
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    const handlePointerDown = (event: React.PointerEvent) => {
      const $contents = contentsRef.current;
      if (!$contents) return;

      event.preventDefault();
      setIsThumbDragging(true);

      const isHorizontal = props.direction === "horizontal";
      const initialOffset = Number(thumbPosition.replace("%", ""));
      const initialClientPosition = isHorizontal
        ? event.clientX
        : event.clientY;

      const range = isHorizontal
        ? $contents.clientWidth - thumbSize
        : $contents.clientHeight - thumbSize;
      const maximumTop = isHorizontal
        ? (range / $contents.clientWidth) * 100
        : (range / $contents.clientHeight) * 100;

      const handlePointerUp = () => {
        setIsThumbDragging(false);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointermove", handlePointerMove);
      };

      const handlePointerMove = (event: PointerEvent) => {
        const movement = isHorizontal
          ? event.clientX - initialClientPosition
          : event.clientY - initialClientPosition;
        const movementRatio = isHorizontal
          ? movement / $contents.clientWidth
          : movement / $contents.clientHeight;

        let nextOffset = initialOffset + movementRatio * 100;
        if (nextOffset < 0) nextOffset = 0;
        if (nextOffset > maximumTop) nextOffset = maximumTop;

        setThumbPosition(`${nextOffset}%`);
        $contents.scrollTo({
          left: isHorizontal
            ? (nextOffset / 100) * $contents.scrollWidth
            : undefined,
          top: !isHorizontal
            ? (nextOffset / 100) * $contents.scrollHeight
            : undefined,
          behavior: "instant",
        });
      };

      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointermove", handlePointerMove);
    };

    const getScrollbarStyle = (direction: ScrollbarDirection, value: any) => {
      return props.direction === direction ? value : undefined;
    };

    useEffect(() => {
      updateScrollbar();
      window.addEventListener("resize", updateScrollbar);
      return () => window.removeEventListener("resize", updateScrollbar);
    }, [updateScrollbar]);

    useEffect(() => {
      const $contents = contentsRef.current;
      if (!$contents) return;
      if (props.direction === "vertical") return;

      const handleWheel = (event: WheelEvent) => {
        if (event.deltaY === 0) return;
        event.preventDefault();

        const $target = event.currentTarget as HTMLElement;
        const nextScrollLeft = $contents.scrollLeft + event.deltaY;
        $target.scrollLeft = nextScrollLeft;
      };

      $contents.addEventListener("wheel", handleWheel);
      return () => $contents.removeEventListener("wheel", handleWheel);
    }, [props.direction]);

    return (
      <div
        ref={ref}
        style={props.style}
        className={classNames(
          style.scrollbar,
          props.className,
          style[props.direction],
        )}
      >
        <div
          ref={contentsRef}
          className={style.contents}
          onScroll={handleScroll}
        >
          {props.children}
        </div>

        <div
          className={classNames(style.scrollbarTrack, {
            [style.disabled]: !needScrollbar,
          })}
          style={{
            margin: margin,
            ...trackPosition,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={style.scrollbarThumb}
            style={{
              width: getScrollbarStyle("horizontal", thumbSize),
              height: getScrollbarStyle("vertical", thumbSize),
              top: getScrollbarStyle("vertical", thumbPosition),
              left: getScrollbarStyle("horizontal", thumbPosition),
              opacity: isThumbVisible ? 1 : 0,
              pointerEvents: isThumbVisible ? "auto" : "none",
            }}
            onPointerDown={handlePointerDown}
          />
        </div>
      </div>
    );
  },
);

export default Scrollbar;
