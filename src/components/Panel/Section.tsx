import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";
import style from "./style.module.scss";

export type PanelSectionProps = {
  title?: string;
  actions?: React.ReactNode;
  isCollapsible?: boolean;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelSection = React.forwardRef<HTMLDivElement, PanelSectionProps>(
  (props, ref) => {
    const contentsRef = useRef<HTMLDivElement>(null);

    const [contentsHeight, setContentsHeight] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(
      props.isCollapsible ?? false,
    );

    const handleToggleIsCollapsed = () => {
      if (!props.isCollapsible) return;
      setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
      if (isCollapsed || !props.children) {
        setContentsHeight(0);
        return;
      }

      const $contents = contentsRef.current;
      if (!$contents) return;

      const { height } = $contents.getBoundingClientRect();
      setContentsHeight(height);
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

        <div
          className={style.sectionContents}
          style={{ height: contentsHeight }}
        >
          <div ref={contentsRef}>{props.children}</div>
        </div>
      </div>
    );
  },
);

export default PanelSection;
