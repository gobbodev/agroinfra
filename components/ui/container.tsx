import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`relative w-full max-w-[1150px] mx-auto ${className} container:px-10 laptop:px-9 mobile:px-8 mobile_g:px-6 mobile_m:px-5 mobile_sx:px-4`}
    >
      {children}
    </div>
  );
}
