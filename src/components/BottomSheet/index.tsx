import React, { useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import Scrim from "@/components/Scrim";
import useMountEffect from "@/hooks/useMountEffect";
import style from "./style.module.scss";

export type BottomSheetProps = {
  onClickAway?: (event: React.MouseEvent<HTMLDivElement>) => void;

  className?: string;
  children?: React.ReactNode;
};

const BottomSheet = React.forwardRef<HTMLDivElement, BottomSheetProps>(
  (props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => containerRef.current!, []);

    useMountEffect({
      init: () => containerRef.current,
      onMounted: ($sheet) => $sheet.classList.add(style.visible),
      onUnmounted: ($sheet) => $sheet.classList.remove(style.visible),
      timeout: 2000,
    });

    return (
      <div className={classNames(style.bottomSheet, props.className)}>
        <Scrim onClick={props.onClickAway} />
        {/* <div ref={containerRef} className={style.container}>
          {props.children}
        </div> */}
      </div>
    );
  },
);

export default BottomSheet;
