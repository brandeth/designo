"use client";

import {
  forwardRef,
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  useId,
} from "react";
import Image from "next/image";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  className?: string;
  error?: string;
};

const DEFAULT_ROWS = 3;

const baseClasses =
  "w-full border-0 bg-transparent px-4 py-[11px] text-designo-white text-preset-body outline-none shadow-[inset_0_-1px_0_0_#fff] transition-[box-shadow] placeholder:text-designo-white/50 focus:shadow-[inset_0_-3px_0_0_#fff] data-[filled=true]:shadow-[inset_0_-3px_0_0_#fff]";

function hasTextareaValue(
  value: TextareaProps["value"] | TextareaProps["defaultValue"],
) {
  if (value == null) {
    return false;
  }

  return String(value).length > 0;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      "aria-describedby": ariaDescribedBy,
      className,
      defaultValue,
      error,
      id,
      onChange,
      rows = DEFAULT_ROWS,
      value,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const isFilled =
      hasTextareaValue(value) ||
      (value === undefined && hasTextareaValue(defaultValue));
    const errorId = error ? `${id ?? generatedId}-error` : undefined;
    const describedBy =
      [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

    const classes = [
      baseClasses,
      "h-[102px] resize-none",
      error ? "pr-40" : undefined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(event);
      event.currentTarget.dataset.filled = String(
        event.currentTarget.value.length > 0,
      );
    }

    return (
      <div className="relative">
        <textarea
          {...props}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
          ref={ref}
          className={classes}
          data-filled={String(isFilled)}
          defaultValue={defaultValue}
          id={id}
          onChange={handleChange}
          rows={rows}
          value={value}
        />
        {error ? (
          <div
            id={errorId}
            className="pointer-events-none absolute top-2.75 right-2 flex items-center gap-2.25 text-[12px] leading-6.5 tracking-[0] text-designo-white italic"
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
  },
);
