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
        "h-14 px-6 rounded-full hover:bg-charcoal hover:text-bone transition duration-[0.3s] delay-200 border border-charcoal uppercase inline-flex items-center gap-2",
        variant === "primary" &&
          "bg-charcoal text-bone hover:bg-sage hover:text-white hover:border-transparent",
        variant === "secondary" && "",
        variant === "text" && "h-auto px-0 border-transparent",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
