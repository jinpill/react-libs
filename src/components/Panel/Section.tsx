import React, { useRef, useState } from "react";
import classNames from "classnames";

import Icon from "@/components/Icon";
import useMountEffect from "@/hooks/useMountEffect";
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
    const [isCollapsed, setIsCollapsed] = useState(
      props.isCollapsible ?? false,
    );

    const handleToggleIsCollapsed = () => {
      setIsCollapsed((prev) => !prev);
    };

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
                  <Icon preset={isCollapsed ? "expand_more" : "expand_less"} />
                )}
              </div>
            </div>
          </div>
        )}
        {!isCollapsed && props.children && (
          <SectionContents>{props.children}</SectionContents>
        )}
      </div>
    );
  },
);

export default PanelSection;

type SectionContentsProps = {
  children?: React.ReactNode;
};

const SectionContents = (props: SectionContentsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useMountEffect({
    init: () => ref.current,
    onMounted: ($contents) => {
      const $child = $contents.children[0] as HTMLDivElement;
      if (!$child) return;

      const { height } = $child.getBoundingClientRect();
      $contents.style.height = `${height}px`;
    },
    onUnmounted: ($contents) => {
      const $child = $contents.children[0] as HTMLDivElement;
      if (!$child) return;

      $contents.style.height = "0px";
    },
  });

  return (
    <div ref={ref} className={style.sectionContents}>
      <div>{props.children}</div>
    </div>
  );
};
