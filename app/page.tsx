import { Banner } from "@/components/sections/Banner";
import { FAQ } from "@/components/sections/FAQ";
import { PorqueIrrigar } from "@/components/sections/PorqueIrrigar";

export default function Home() {
  return (
    <div className="">
      <Banner />

      <PorqueIrrigar />
      <main className="">
        <FAQ />
      </main>
    </div>
  );
}
