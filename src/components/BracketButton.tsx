import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BracketButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
}

export default function BracketButton({
  children,
  className = "",
  ...rest
}: BracketButtonProps) {
  const bracket =
    "w-0 overflow-hidden opacity-0 duration-300 text-OneGreen group-hover:w-4 group-hover:opacity-100";

  return (
    <button
      {...rest}
      className={`group flex items-center justify-center hover:cursor-pointer ${className}`}
    >
      <span className={bracket}>[</span>
      <span>{children}</span>
      <span className={bracket}>]</span>
    </button>
  );
}
