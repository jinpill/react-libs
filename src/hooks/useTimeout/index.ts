import { useEffect, useMemo, useRef } from "react";

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
