import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="relative w-full max-w-[1150px] mx-auto">{children}</div>;
}
