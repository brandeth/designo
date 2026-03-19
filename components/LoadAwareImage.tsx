"use client";

import Image, { type ImageProps } from "next/image";
import {
  forwardRef,
  useCallback,
  useState,
  type Ref,
  type SyntheticEvent,
} from "react";

type LoadAwareImageProps = ImageProps;

function setRefValue<T>(ref: Ref<T> | undefined, value: T) {
  if (!ref) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  ref.current = value;
}

export const LoadAwareImage = forwardRef<HTMLImageElement, LoadAwareImageProps>(
  function LoadAwareImage({ alt, className, onLoad, ...props }, forwardedRef) {
    const [imageState, setImageState] = useState({
      isVisible: true,
      shouldAnimate: false,
    });

    const handleRef = useCallback(
      (image: HTMLImageElement | null) => {
        setRefValue(forwardedRef, image);

        if (!image) {
          return;
        }

        setImageState((current) => {
          if (image.complete) {
            return current.isVisible && !current.shouldAnimate
              ? current
              : { isVisible: true, shouldAnimate: false };
          }

          return current.shouldAnimate && !current.isVisible
            ? current
            : { isVisible: false, shouldAnimate: true };
        });
      },
      [forwardedRef],
    );

    const handleLoad = useCallback(
      (event: SyntheticEvent<HTMLImageElement>) => {
        setImageState((current) =>
          current.shouldAnimate && !current.isVisible
            ? { ...current, isVisible: true }
            : current,
        );
        onLoad?.(event);
      },
      [onLoad],
    );

    const composedClassName = [
      className,
      imageState.shouldAnimate ? "transition-opacity duration-700" : "",
      imageState.isVisible ? "opacity-100" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Image
        {...props}
        alt={alt}
        ref={handleRef}
        onLoad={handleLoad}
        className={composedClassName}
      />
    );
  },
);

LoadAwareImage.displayName = "LoadAwareImage";
