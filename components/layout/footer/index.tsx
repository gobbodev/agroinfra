import Link from "next/link";
import { dataLayout } from "../data";

export function Footer() {
  return (
    <footer>
      <nav>
        {dataLayout.map((item, index) => (
          <Link href={item.link} key={item.text + index}>
            {item.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
