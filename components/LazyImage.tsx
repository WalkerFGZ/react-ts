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
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;
export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const ref = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img ref={ref} src={currentSrc} alt="random fox image" {...imgProps} />
  );
};
