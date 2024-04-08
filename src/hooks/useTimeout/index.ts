import { useEffect, useMemo, useRef } from "react";

/**
 * This hook helps manage setTimeout easily in React.
 *
 * When the component is unmounted, the timeout will be cleared.
 * Also, the timeout will be cleared when the set function is called.
 * @returns An object with clear and set functions.
 */
const useTimeout = () => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const clear = () => {
    if (timeoutIdRef.current === null) return;
    clearTimeout(timeoutIdRef.current);
  };

  const set = (callback: () => void, ms: number) => {
    clear();
    timeoutIdRef.current = setTimeout(callback, ms);
  };

  // Clear timeout on unmount.
  useEffect(() => clear, []);

  // Return clear and set functions.
  return useMemo(() => ({ clear, set }), []);
};

export default useTimeout;
