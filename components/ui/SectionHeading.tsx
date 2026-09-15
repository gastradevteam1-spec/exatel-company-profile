interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  // Each subpage needs exactly one real <h1> for SEO — pass "h1" on the
  // first SectionHeading of a page, leave every other instance as the
  // default h2. Visual size is unaffected either way (both use `.h2`).
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <div>
      <div className="kicker">
        <span className="kicker-bar" />
        {eyebrow}
      </div>
      <Heading className="h2 max-w-xl">{title}</Heading>
      {lede && (
        <p className="mt-4 max-w-xl text-muted text-[1.02rem]">{lede}</p>
      )}
    </div>
  );
}
