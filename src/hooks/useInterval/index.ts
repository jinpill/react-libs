import { useEffect, useMemo, useRef } from "react";

/**
 * This hook helps manage setInterval easily in React.
 *
 * When the component is unmounted, the interval will be cleared.
 * Also, the interval will be cleared when the set function is called.
 * @returns An object with clear and set functions.
 */
const useInterval = () => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const clear = () => {
    if (intervalIdRef.current === null) return;
    clearInterval(intervalIdRef.current);
  };

  const set = (callback: () => void, ms: number) => {
    clear();
    intervalIdRef.current = setInterval(callback, ms);
  };

  // Clear interval on unmount.
  useEffect(() => clear, []);

  // Return clear and set functions.
  return useMemo(() => ({ clear, set }), []);
};

export default useInterval;
