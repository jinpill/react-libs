import React, { useMemo } from "react";

export type TextNormalizerProps = {
  text: string;
};

const TextNormalizer = React.forwardRef<HTMLSpanElement, TextNormalizerProps>(
  (props, ref) => {
    const children = useMemo(() => {
      const textList: string[] = [];
      const children: React.ReactNode[] = [];

      props.text.split("\n").forEach((text, i, list) => {
        const trimmedText = text.trim();
        if (!trimmedText && !list[i - 1]) return;
        textList.push(trimmedText);
      });
      if (!textList[textList.length - 1]) textList.pop();

      for (let i = 0; i < textList.length; i++) {
        const text = textList[i].trim();

        if (children.length > 0) {
          children.push(
            <React.Fragment key={i}>
              <br />
              {text}
            </React.Fragment>,
          );
        } else {
          children.push(<React.Fragment key={i}>{text}</React.Fragment>);
        }
      }

      return children;
    }, [props.text]);

    return <span ref={ref}>{children}</span>;
  },
);

TextNormalizer.displayName = "TextNormalizer";
export default TextNormalizer;
