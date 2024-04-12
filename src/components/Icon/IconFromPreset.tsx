import React, { useEffect, useState } from "react";
import type { IconPreset } from ".";

type IconFromPresetProps = {
  preset: IconPreset;
};

const IconFromPreset = (props: IconFromPresetProps) => {
  const [SVG, setSVG] = useState<React.FC | null>(null);

  useEffect(() => {
    (async () => {
      const SVG = React.lazy(() => import(`./presets/${props.preset}.tsx`));
      setSVG(SVG);
    })();
  }, [props.preset]);

  return <div>{SVG && <SVG />}</div>;
};

export default IconFromPreset;
