import { homeFaqs } from "@/content/faqs";
import { Section } from "../layout/Section";
import { Accordion } from "../ui/Accordion";

export function HomeFaq({ index }: { index?: number }) {
  return (
    <Section id="faq" index={index} label="FAQ" title="Good to know" narrow>
      <Accordion items={homeFaqs} />
    </Section>
  );
}
