const services = [
  {
    name: "Lawn Maintenance",
    description:
      "Regular mowing, edging, and fertilization keeping residential and commercial lawns in peak condition year-round.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12M12 12C12 7 7 4 3 5c0 6 4 10 9 10zM12 12C12 7 17 4 21 5c0 6-4 10-9 10z"/>
      </svg>
    ),
  },
  {
    name: "Landscape Design & Install",
    description:
      "Custom sod laying, ornamental planting, and garden bed creation tailored to your property and vision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    name: "Tree & Shrub Trimming",
    description:
      "Professional pruning and trimming to maintain healthy growth, improve curb appeal, and prevent overgrowth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 22M9.5 4.75c.94 2.88 2.5 5 5.5 6.25M21 12c-4 .5-6 2.5-7 5"/>
      </svg>
    ),
  },
  {
    name: "Irrigation Systems",
    description:
      "Installation and maintenance of efficient irrigation systems for consistent, water-saving coverage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    name: "Yard Cleanup",
    description:
      "Full-service cleanup including debris removal, leaf collection, and seasonal deep cleans for any property.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
        <path d="M10 11v6M14 11v6"/>
      </svg>
    ),
  },
  {
    name: "Commercial Properties",
    description:
      "Reliable recurring service for offices, retail, HOAs, and commercial properties across the Central Valley.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.64_0.13_80)] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-[oklch(0.18_0.025_148)] text-4xl lg:text-5xl mb-4 max-w-xl">
            Every service your property needs
          </h2>
          <p className="text-[oklch(0.40_0.05_148)] text-lg max-w-2xl">
            From routine lawn care to full landscape installations — Tony&apos;s does it all with a
            licensed, professional team that shows up on time and communicates throughout.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`bg-[oklch(0.985_0.006_148)] rounded-2xl p-6 border border-[oklch(0.88_0.018_148)] hover:border-[oklch(0.24_0.08_148)/0.3] hover:shadow-sm transition-all duration-200 animate-fade-up stagger-${Math.min(i + 1, 6)}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.94_0.025_148)] text-[oklch(0.24_0.08_148)] flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-[oklch(0.18_0.025_148)] text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-[oklch(0.48_0.04_148)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
