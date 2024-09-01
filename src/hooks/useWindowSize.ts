import { useLayoutEffect, useState } from 'react';

export function useWindowSize(): {
  width: number | undefined;
  height: number | undefined;
} {
  const [size, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({ width: undefined, height: undefined });
  useLayoutEffect(() => {
    function updateSize(): void {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
