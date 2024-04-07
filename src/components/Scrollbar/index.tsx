import React from "react";
import style from "./style.module.scss";

export type ScrollbarProps = {
  children?: React.ReactNode;
};

const Scrollbar = (props: ScrollbarProps) => {
  return <div className={style.scrollbar}></div>;
};

export default Scrollbar;
