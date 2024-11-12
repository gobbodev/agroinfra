import { Banner } from "@/components/sections/Banner";
import { PorqueIrrigar } from "@/components/sections/PorqueIrrigar";

export default function Home() {
  return (
    <div className="">
      <Banner />

      <main className="">
        <PorqueIrrigar />
      </main>
    </div>
  );
}
