import Image from "next/image";
import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "link";

type BaseButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonElementProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonLinkProps = BaseButtonProps &
  ComponentPropsWithoutRef<typeof Link> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

type ButtonProps = ButtonElementProps | ButtonLinkProps;

const baseClasses =
  "inline-flex h-14 w-[152px] items-center justify-center rounded-lg font-sans text-[15px] font-medium uppercase tracking-[1px] transition-colors cursor-pointer";

const linkBaseClasses =
  "inline-flex items-center gap-4 font-sans text-[15px] font-medium uppercase tracking-[5px] transition-opacity hover:opacity-80 focus-visible:opacity-80";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-designo-peach text-designo-white hover:bg-designo-peach-light",
  secondary:
    "border border-designo-grey-light bg-designo-white text-designo-grey-dark hover:border-designo-peach-light hover:bg-designo-peach-light hover:text-designo-white",
  link: "h-auto w-auto rounded-none p-0",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const layoutClasses = variant === "link" ? linkBaseClasses : baseClasses;

  const classes = [layoutClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {variant === "link" ? (
        <Image
          src="/icons/right-arrow.svg"
          alt=""
          aria-hidden="true"
          width={7}
          height={10}
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const {
      variant: _variant,
      className: _className,
      children: _children,
      ...linkProps
    } = props;
    void _variant;
    void _className;
    void _children;

    return (
      <Link className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    className: _className,
    children: _children,
    type = "button",
    ...buttonProps
  } = props;
  void _variant;
  void _className;
  void _children;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
