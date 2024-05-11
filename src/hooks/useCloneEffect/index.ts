import { useLayoutEffect } from "react";
import useStateRef from "@/hooks/useStateRef";

export type UseCloneEffectOptions<E extends HTMLElement> = {
  init: () => E | null;
  parent: () => HTMLElement | null;
  onMounted?: (element: E) => void;
  onUnmounted?: (element: E, removeClone: () => void) => void;
  timeout?: number;
  isVisible: boolean;
};

const useCloneEffect = <E extends HTMLElement>(
  options: UseCloneEffectOptions<E>,
) => {
  const { isVisible } = options;
  const optionsRef = useStateRef(options);

  useLayoutEffect(() => {
    if (!isVisible) return;

    const options = optionsRef.current;
    const $clone = options.init()?.cloneNode(true) as E;
    const $parent = options.parent();
    if (!$clone || !$parent) return;

    $parent.appendChild($clone);
    setTimeout(() => options.onMounted?.($clone), 0);

    return () => {
      const removeClone = () => {
        clearTimeout(timeoutId);
        $clone.removeEventListener("transitionend", removeClone);
        $clone.remove();
      };

      $clone.addEventListener("animationend", removeClone, { once: true });
      const timeoutId = setTimeout(removeClone, options.timeout ?? 1000);
      setTimeout(() => options.onUnmounted?.($clone, removeClone), 0);
    };
  }, [isVisible, optionsRef]);
};

export default useCloneEffect;
