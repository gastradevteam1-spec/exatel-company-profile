export default function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col border border-line max-w-2xl bg-white">
      {items.map((item, i) => (
        <div
          key={item}
          className={`flex items-center gap-3 px-4 py-3 text-sm text-[#262a44] border-b border-line last:border-b-0 ${
            i % 2 === 1 ? "bg-[#fbfbfd]" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-magenta shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}
