import { useRef, type RefObject } from "react";

export function useFormRefs<T extends string>(
  fieldNames: T[]
): {
  [K in T]: RefObject<HTMLInputElement>;
} {
  const refs = useRef<{
    [
      key: string
    ]: RefObject<HTMLInputElement | null>;
  }>({});

  if (Object.keys(refs.current).length === 0) {
    fieldNames.forEach((key) => {
      refs.current[key] =
        useRef<HTMLInputElement>(null);
    });
  }

  return refs.current as {
    [K in T]: RefObject<HTMLInputElement>;
  };
}
