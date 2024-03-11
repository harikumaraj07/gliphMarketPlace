import {useRef} from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  interval: number = 500,
) => {
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: any[]) => {
    if (timeRef.current !== null) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
    timeRef.current = setTimeout(() => {
      callback(...args);
    }, interval);
  };
};
