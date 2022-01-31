import { useEffect, useRef, useState } from "react";

/**
 * 要素が画面に入ったかを検知する
 */
const useIntersectionObserver = <T extends HTMLElement>({
  once = true,
  margin = 200,
}: {
  once?: boolean;
  margin?: number;
}): [React.RefObject<T>, boolean] => {
  const targetRef = useRef<T>(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    if (targetRef.current === null) {
      return;
    }

    const observer = new IntersectionObserver(
      (changes) => {
        changes.forEach((change) => {
          setIsIntersected(change.isIntersecting);

          // 一回切りで監視をやめる
          if (change.isIntersecting && once) {
            observer.disconnect();
          }
        });
      },
      { rootMargin: `0px 0px -${margin}px` }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [margin, once]);

  return [targetRef, isIntersected] as [typeof targetRef, typeof isIntersected];
};

export default useIntersectionObserver;
