import { useRef, useEffect } from "react";

/**
 * This hook returns a ref object refering to the state.
 *
 * When the state changes, the ref object will be updated with the new state.
 * @param state The state to be defined as a ref object.
 * @returns A ref object with the state as its current value.
 */
const useStateRef = <T>(state: T) => {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

export default useStateRef;
