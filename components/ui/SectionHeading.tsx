interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="kicker">
        <span className="kicker-bar" />
        {eyebrow}
      </div>
      <h2 className="h2 max-w-xl">{title}</h2>
      {lede && (
        <p className="mt-4 max-w-xl text-muted text-[1.02rem]">{lede}</p>
      )}
    </div>
  );
}
