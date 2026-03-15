import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex h-14 w-[152px] items-center justify-center rounded-lg font-sans text-[15px] font-medium uppercase tracking-[1px] transition-colors cursor-pointer";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-designo-peach text-designo-white hover:bg-designo-peach-light",
  secondary:
    "border border-designo-grey-light bg-designo-white text-designo-grey-dark hover:border-designo-peach-light hover:bg-designo-peach-light hover:text-designo-white",
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} type={type} {...props} />;
}
