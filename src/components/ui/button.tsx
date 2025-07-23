import { ButtonHTMLAttributes, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button
      className={twMerge(
        "h-14 px-6 rounded-full uppercase inline-flex items-center gap-2",
        variant === "primary" &&
          "hover:bg-sage hover:text-white text-bone bg-charcoal transition hover:border-transparent duration-[0.3s] delay-200 border border-charcoal",
        variant === "secondary" &&
          "bg-charcoal text-bone hover:bg-sage hover:text-white hover:border-transparent",
        variant === "text" &&
          "h-auto px-0 border-transparent hover:focus:not-sr-only",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
