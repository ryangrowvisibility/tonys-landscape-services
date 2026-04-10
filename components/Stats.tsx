export default function Stats() {
  return (
    <section className="py-16 bg-[oklch(0.24_0.08_148)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "2007", label: "Year Founded" },
            { value: "18+", label: "Years in Business" },
            { value: "#898234", label: "CA License No." },
            { value: "BBB A+", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-white text-3xl lg:text-4xl mb-1">
                {stat.value}
              </div>
              <div className="text-[oklch(0.75_0.05_148)] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
