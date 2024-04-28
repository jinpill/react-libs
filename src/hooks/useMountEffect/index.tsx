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
  const initRef = useStateRef(options.init);
  const onMountedRef = useStateRef(options.onMounted);
  const onUnmountedRef = useStateRef(options.onUnmounted);
  const timeoutRef = useStateRef(options.timeout ?? 1000);

  useLayoutEffect(() => {
    const $element = initRef.current();
    const $parent = $element?.parentElement;
    if (!$element || !$parent) return;
    setTimeout(() => onMountedRef.current?.($element), 0);

    return () => {
      const $clone = $element.cloneNode(true) as E;

      const removeClone = () => {
        clearTimeout(timeoutId);
        $clone.removeEventListener("transitionend", removeClone);
        $clone.remove();
      };

      $clone.addEventListener("transitionend", removeClone, { once: true });
      const timeoutId = setTimeout(removeClone, timeoutRef.current);

      $parent.insertBefore($clone, $element);
      setTimeout(() => onUnmountedRef.current?.($clone), 0);
    };
  }, [initRef, onMountedRef, onUnmountedRef, timeoutRef]);
};

export default useMountEffect;
