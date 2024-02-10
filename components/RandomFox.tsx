import type { FC, FunctionComponent } from "react";

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
  return (
    <img src={image} width={320} height="auto" className="rounded" alt={alt} />
  );
};
