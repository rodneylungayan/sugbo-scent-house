import { homeSections } from "@/config/sections";
import { pages } from "@/content/pages";
import { buildMetadata } from "@/lib/seo";
import { homeFaqs } from "@/content/faqs";
import { faqSchema, graph, storeSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export const metadata = buildMetadata(pages.home);

/** Number each "numbered" section 1, 2, 3… in the order of the registry. */
const sections = homeSections
  .filter((s) => s.enabled)
  .map((s, i, list) => ({
    ...s,
    index: s.numbered ? list.slice(0, i + 1).filter((x) => x.numbered).length : undefined,
  }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(storeSchema(), faqSchema(homeFaqs))} />
      {sections.map(({ id, Component, index }) => (
        <Component key={id} index={index} />
      ))}
    </>
  );
}
