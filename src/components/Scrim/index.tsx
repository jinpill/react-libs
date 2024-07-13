import React, { useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import useMountEffect from "@/hooks/useMountEffect";
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

  useMountEffect({
    init: () => scrimRef.current,
    onMounted: ($scrim) => $scrim.classList.add(style.visible),
    onUnmounted: ($scrim) => $scrim.classList.remove(style.visible),
    timeout: duration + 100,
  });

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

Scrim.displayName = "Scrim";
export default Scrim;
