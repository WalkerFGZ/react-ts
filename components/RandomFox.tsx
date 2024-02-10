import type { FC, FunctionComponent } from "react";
import { useEffect, useRef, useState } from "react";

// export const RandomFox = () => { IMPLICIT TYPESCRIPT
//     return <img />
// }

// export const RandomFox : FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox: FC = () => {
//     return <img />;
// }

type Props = {
  image: string;
  alt: string;
};
export const RandomFox = ({ image, alt }: Props): JSX.Element => {
  const ref = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <img
      ref={ref}
      src={src}
      width={320}
      height="auto"
      className="rounded bg-gray-300"
      alt={alt}
    />
  );
};
