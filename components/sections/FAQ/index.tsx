import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

import { dataFAQ } from "./data";

export function FAQ() {
  return (
    <Container>
      <Accordion type="single" collapsible>
        {dataFAQ.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={item.text + index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
