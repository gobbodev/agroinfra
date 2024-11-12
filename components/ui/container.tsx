import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`relative w-full max-w-[1150px] mx-auto ${className} container: px-6`}
    >
      {children}
    </div>
  );
}
