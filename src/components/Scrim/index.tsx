import React, { useImperativeHandle, useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type ScrimProps = {
  opacity?: number | `${number}`;
  duration?: number | `${number}`;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  className?: string;
  children?: React.ReactNode;
};

const Scrim = React.forwardRef<HTMLDivElement, ScrimProps>((props, ref) => {
  const scrimRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => scrimRef.current!, []);

  const opacity = props.opacity ?? 0.5;
  const duration = Number(props.duration ?? 300);

  useLayoutEffect(() => {
    const $scrim = scrimRef.current;
    const $parent = $scrim?.parentElement;
    if (!$scrim || !$parent) return;
    setTimeout(() => $scrim.classList.add(style.visible), 0);

    return () => {
      const $clone = $scrim.cloneNode(true) as HTMLDivElement;

      const removeClone = () => {
        clearTimeout(timeoutId);
        $clone.removeEventListener("transitionend", removeClone);
        $clone.remove();
      };

      $clone.addEventListener("transitionend", removeClone, { once: true });
      const timeoutId = setTimeout(removeClone, duration + 100);

      $parent.insertBefore($clone, $scrim);
      setTimeout(() => $clone.classList.remove(style.visible), 0);
    };
  }, [duration]);

  return (
    <div
      ref={scrimRef}
      className={classNames(style.scrim, props.className)}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        transition: `opacity ${duration}ms ease-in-out`,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
});

export default Scrim;
