import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

import { dataFAQ } from "./data";
import { Title } from "@/components/ui/title";
import { Question } from "@/public/svg";

export function FAQ() {
  return (
    <section className="_p-section">
      <Container className="flex flex-col items-center w-full">
        <Title title={"FAQ"} subTitle="outras dúvidas frequentes" />
        <Accordion
          className="z-10 text-preto max-w-[50%] w-full laptop:max-w-[75%] mobile_g:max-w-[100%]"
          type="single"
          collapsible
        >
          {dataFAQ.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.text + index}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.text}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Question className="z-0 absolute right-4 top-5 laptop:_r-top laptop:bottom-[-60px] laptop:max-w-36 laptop:opacity-20" />
      </Container>
    </section>
  );
}
