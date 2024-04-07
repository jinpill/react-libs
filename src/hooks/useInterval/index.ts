import { useEffect, useMemo, useRef } from "react";

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
