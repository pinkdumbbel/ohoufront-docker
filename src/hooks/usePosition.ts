import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

const usePosition = (targetEl: RefObject<HTMLDivElement>): number => {
  const [intersect, setIntersect] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver>();

  const getObserver = useCallback(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 1) {
        setIntersect(entries[0].intersectionRatio);
      }
    });

    return observerRef.current;
  }, [observerRef.current]);

  useEffect(() => {
    targetEl.current && getObserver().observe(targetEl.current);
    return getObserver().disconnect();
  }, [targetEl.current]);

  return intersect;
};

export default usePosition;
