import React from "react";
import { ReactSVG } from "react-svg";

type IconFromSourceProps = {
  src: string;
};

const IconFromSource = (props: IconFromSourceProps) => (
  <ReactSVG src={props.src} wrapper="div" />
);

export default IconFromSource;
