import { useEffect, useRef, useState } from "react";

/**
 * 要素が画面に入ったかを検知する
 * ファーストビューで要素が画面にいてもスクロールするまでは発火しないように
 * 初回のスクロールのみscrollイベントを使う
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

    const handleScroll = () => {
      if (targetRef.current === null) {
        return;
      }

      observer.observe(targetRef.current);
      // 初回スクロールでイベントリストを切る
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => observer.disconnect();
  }, [margin, once]);

  return [targetRef, isIntersected] as [typeof targetRef, typeof isIntersected];
};

export default useIntersectionObserver;
