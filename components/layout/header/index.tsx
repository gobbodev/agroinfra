import Link from "next/link";
import Image from "next/image";

import { dataLayout } from "../data";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="w-full absolute z-50 text-slate-200 py-5">
      <Container className="flex justify-between items-center">
        <div className="_bag-image max-w-[350px]">
          <Image
            fill
            src={"/images/logo_escrita.png"}
            alt="logo triangular e retangular verde com a escrita AGROINFRA ENGENHARIA PROJETOS E SERVIÇOS EM IRRIGAÇÃO"
            priority
          />
        </div>

        <nav className="flex gap-8 justify-end">
          {dataLayout.map((item, index) => (
            <Link
              className="relative _underline-effect"
              href={item.link}
              key={item.text + index}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
