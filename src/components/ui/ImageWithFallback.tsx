import { useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: React.ReactNode;
};

export function ImageWithFallback({ fallback, onError, src, ...rest }: Props) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) return <>{fallback ?? null}</>;

  return (
    <img
      {...rest}
      src={src}
      onError={(e) => {
        onError?.(e);
        setErrored(true);
      }}
    />
  );
}
