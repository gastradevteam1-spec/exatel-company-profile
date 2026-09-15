export default function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col border border-line max-w-2xl bg-white">
      {items.map((item, i) => (
        <div
          key={item}
          className={`flex items-center gap-3 px-4 py-3 text-sm text-body border-b border-line last:border-b-0 dark:bg-ink-2 dark:text-on-dark ${
            i % 2 === 1 ? "bg-paper-dim/40 dark:bg-ink" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}
