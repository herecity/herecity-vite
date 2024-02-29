import { useEffect, useState } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  root: HTMLElement | null = null,
) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(() => {
        callback();
      });
    },
    { root, threshold: 0.8 },
  );

  useEffect(() => {
    if (!target) return;

    intersectionObserver.observe(target);

    return () => {
      intersectionObserver.unobserve(target);
    };
  }, [target]);

  return {
    setTarget,
  };
};
