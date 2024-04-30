import React, { useImperativeHandle, useRef } from "react";
import classNames from "classnames";
import Scrim from "@/components/Scrim";
import useMountEffect from "@/hooks/useMountEffect";
import style from "./style.module.scss";

export type BottomSheetProps = {
  scrimOpacity?: number | `${number}`;
  isNonModal?: boolean;
  onClickAway?: (event: React.MouseEvent<HTMLDivElement>) => void;

  className?: string;
  children?: React.ReactNode;
};

const BottomSheet = React.forwardRef<HTMLDivElement, BottomSheetProps>(
  (props, ref) => {
    const sheetRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => sheetRef.current!, []);

    useMountEffect({
      init: () => sheetRef.current,
      onMounted: ($sheet) => $sheet.classList.add(style.visible),
      onUnmounted: ($sheet) => $sheet.classList.remove(style.visible),
      timeout: 400,
    });

    return (
      <>
        {!props.isNonModal && (
          <Scrim opacity={props.scrimOpacity} onClick={props.onClickAway} />
        )}

        <div
          ref={sheetRef}
          className={classNames(style.bottomSheet, props.className)}
        >
          <div className={style.container}>{props.children}</div>
        </div>
      </>
    );
  },
);

export default BottomSheet;
