"use client";

import {
  forwardRef,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  useId,
} from "react";
import Image from "next/image";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  className?: string;
  error?: string;
};

const baseClasses =
  "w-full border-0 bg-transparent px-4 py-[11px] text-designo-white text-preset-body outline-none shadow-[inset_0_-1px_0_0_#fff] transition-[box-shadow] placeholder:text-designo-white/50 focus:shadow-[inset_0_-3px_0_0_#fff] data-[filled=true]:shadow-[inset_0_-3px_0_0_#fff]";

function hasInputValue(
  value: InputProps["value"] | InputProps["defaultValue"],
) {
  if (value == null) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return String(value).length > 0;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    "aria-describedby": ariaDescribedBy,
    className,
    defaultValue,
    error,
    id,
    onChange,
    type = "text",
    value,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const isFilled =
    hasInputValue(value) ||
    (value === undefined && hasInputValue(defaultValue));
  const errorId = error ? `${id ?? generatedId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  const classes = [baseClasses, error ? "pr-40" : undefined, className]
    .filter(Boolean)
    .join(" ");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event);
    event.currentTarget.dataset.filled = String(
      event.currentTarget.value.length > 0,
    );
  }

  return (
    <div className="relative">
      <input
        {...props}
        aria-describedby={describedBy}
        aria-invalid={error ? true : undefined}
        ref={ref}
        className={classes}
        data-filled={String(isFilled)}
        defaultValue={defaultValue}
        id={id}
        onChange={handleChange}
        type={type}
        value={value}
      />
      {error ? (
        <div
          id={errorId}
          className="pointer-events-none absolute inset-y-0 right-2 flex items-center gap-2.25 text-[12px] leading-6.5 tracking-[0] text-designo-white italic"
        >
          <span>{error}</span>
          <Image
            src="/error-state.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
          />
        </div>
      ) : null}
    </div>
  );
});
