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
      <h2 className="text-[clamp(1.7rem,3vw,2.35rem)] max-w-xl leading-tight">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-xl text-muted text-[1.02rem]">{lede}</p>
      )}
    </div>
  );
}
