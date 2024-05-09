export type UseCloneEffectOptions<E extends HTMLElement> = {
  init: () => E | null;
  parent: () => HTMLElement | null;
  onMounted?: (element: E) => void;
  onUnmounted?: (element: E) => void;
  timeout?: number;
  isVisible: boolean;
};

const useCloneEffect = <E extends HTMLElement>(
  options: UseCloneEffectOptions<E>,
) => {};

export default useCloneEffect;
