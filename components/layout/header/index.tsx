import Link from "next/link";
import { dataLayout } from "../data";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="w-full absolute z-50 text-slate-200 py-5">
      <Container>
        <nav className="flex gap-8 justify-end">
          {dataLayout.map((item, index) => (
            <Link href={item.link} key={item.text + index}>
              {item.text}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
