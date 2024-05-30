import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";
import style from "./style.module.scss";

export type PanelSectionProps = {
  title?: string;
  actions?: React.ReactNode;
  isCollapsible?: boolean;
  isSpread?: boolean;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelSection = React.forwardRef<HTMLDivElement, PanelSectionProps>(
  (props, ref) => {
    const contentsRef = useRef<HTMLDivElement>(null);

    const [contentsHeight, setContentsHeight] = useState(
      getInitialContentsHeight(props),
    );
    const [isCollapsed, setIsCollapsed] = useState(
      getInitialIsCollapsed(props),
    );

    const handleToggleIsCollapsed = () => {
      if (!props.isCollapsible) return;
      setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
      if (!props.isCollapsible) return;

      if (isCollapsed || !props.children) {
        setContentsHeight("0px");
        return;
      }

      const $contents = contentsRef.current;
      if (!$contents) return;

      const { height } = $contents.getBoundingClientRect();
      setContentsHeight(`${height}px`);
    }, [isCollapsed && props.children]);

    return (
      <div
        ref={ref}
        style={props.style}
        className={classNames(style.section, props.className, {
          [style.collapsible]: props.isCollapsible,
        })}
      >
        {props.title && (
          <div className={style.sectionTitle} onClick={handleToggleIsCollapsed}>
            <div>
              {props.title}
              <div className={style.actions}>
                {props.actions}
                {props.isCollapsible && (
                  <Icon
                    className={style.expandIcon}
                    preset={isCollapsed ? "expand_more" : "expand_less"}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {props.children && (
          <div
            className={style.sectionContents}
            style={{ height: contentsHeight }}
          >
            <div ref={contentsRef}>{props.children}</div>
          </div>
        )}
      </div>
    );
  },
);

export default PanelSection;

const getInitialContentsHeight = (props: PanelSectionProps) => {
  if (!props.isCollapsible) return "auto";
  if (props.isSpread) return "auto";
  return "0px";
};

const getInitialIsCollapsed = (props: PanelSectionProps) => {
  if (!props.isCollapsible) return false;
  if (props.isSpread) return false;
  return true;
};
