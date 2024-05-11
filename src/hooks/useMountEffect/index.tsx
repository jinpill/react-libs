import { useLayoutEffect } from "react";
import useStateRef from "@/hooks/useStateRef";

export type UseMountEffectOptions<E extends HTMLElement> = {
  init: () => E | null;
  onMounted?: (element: E) => void;
  onUnmounted?: (element: E) => void;
  timeout?: number;
};

const useMountEffect = <E extends HTMLElement>(
  options: UseMountEffectOptions<E>,
) => {
  const optionsRef = useStateRef(options);

  useLayoutEffect(() => {
    const options = optionsRef.current;
    const $element = options.init();
    const $parent = $element?.parentElement;

    if (!$element || !$parent) return;
    setTimeout(() => options.onMounted?.($element), 0);

    return () => {
      const $clone = $element.cloneNode(true) as E;

      const removeClone = () => {
        clearTimeout(timeoutId);
        $clone.removeEventListener("transitionend", removeClone);
        $clone.remove();
      };

      $clone.addEventListener("transitionend", removeClone, { once: true });
      const timeoutId = setTimeout(removeClone, options.timeout ?? 1000);

      $parent.insertBefore($clone, $element);
      setTimeout(() => options.onUnmounted?.($clone), 0);
    };
  }, [optionsRef]);
};

export default useMountEffect;
