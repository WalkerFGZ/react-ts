import { useEffect, useRef, useState } from "react";

import type { ImgHTMLAttributes } from "react";

// export const RandomFox = () => { IMPLICIT TYPESCRIPT
//     return <img />
// }

// export const RandomFox : FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox: FC = () => {
//     return <img />;
// }

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;
export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  const ref = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !ref.current) {
          return;
        }

        setCurrentSrc(src);

        if (typeof onLazyLoad === "function") {
          onLazyLoad(ref.current);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad]);

  return (
    <img ref={ref} src={currentSrc} alt="random fox image" {...imgProps} />
  );
};
