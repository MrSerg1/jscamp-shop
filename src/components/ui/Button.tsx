import { ReactNode } from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  text,
  icon,
  className,
  ...props
}: buttonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm transition-all text-white bg-primary hover:bg-primary/90 active:scale-95 w-full ${className}`}
    >
      {text}
      {icon}
    </button>
  );
}
