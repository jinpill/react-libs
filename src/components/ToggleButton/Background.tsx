import React, { useRef } from "react";
import useMountEffect from "@/hooks/useMountEffect";
import style from "./style.module.scss";

type BackgroundProps = {
  width: number;
  left: number;
};

const Background = (props: BackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useMountEffect({
    init: () => backgroundRef.current,
    onMounted: ($background) => $background.classList.add(style.visible),
    onUnmounted: ($background) => $background.classList.remove(style.visible),
    timeout: 400,
  });

  return (
    <div
      ref={backgroundRef}
      className={style.background}
      style={{
        width: `${props.width}px`,
        left: `${props.left * 100}%`,
      }}
    />
  );
};

export default Background;
