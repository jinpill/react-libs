import { useRef, useEffect } from "react";

const useStateRef = <T>(state: T) => {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

export default useStateRef;
