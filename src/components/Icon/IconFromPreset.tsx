import React from "react";
import { ReactSVG } from "react-svg";
import type { IconPreset } from ".";

type IconFromPresetProps = {
  preset: IconPreset;
};

const IconFromPreset = (props: IconFromPresetProps) => (
  <ReactSVG src={`svg/${props.preset}.svg`} wrapper="div" />
);

export default IconFromPreset;
