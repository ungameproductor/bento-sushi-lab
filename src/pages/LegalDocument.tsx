import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import type { LegalSection } from "../data/legal";
import { legalDraftBanner } from "../data/legal";

type Props = {
  path: string;
  kicker: string;
  title: string;
  lede: string;
  sections: LegalSection[];
};

export default function LegalDocument({ path, kicker, title, lede, sections }: Props) {
  return (
    <article className="legal">
      <Seo
        noindex
        title={`${title} | Bento Sushi Lab`}
        description={lede}
        path={path}
      />
      <p className="draft-flag" role="note">
        {legalDraftBanner}
      </p>
      <PageHero kicker={kicker} title={title} lede={lede} />
      {sections.map((section) => (
        <section key={section.id} className="legal-section" aria-labelledby={section.id}>
          <h2 id={section.id}>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
