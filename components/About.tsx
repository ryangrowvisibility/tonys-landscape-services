export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: story */}
          <div>
            <p className="text-[oklch(0.64_0.13_80)] text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-display font-bold text-[oklch(0.18_0.025_148)] text-4xl lg:text-5xl mb-6">
              18 years of doing it right
            </h2>
            <div className="space-y-4 text-[oklch(0.38_0.05_148)] text-base leading-relaxed max-w-lg">
              <p>
                Tony&apos;s Landscape Services was founded in Fresno in 2007 by Meleton Ramirez —
                a California Licensed Landscape Contractor with a simple philosophy: show up,
                communicate, and do exceptional work.
              </p>
              <p>
                Nearly two decades later, that approach has earned the business an A+ rating with
                the BBB and a reputation across Fresno County for fast response times, professional
                crews, and quality that holds up season after season.
              </p>
              <p>
                From residential lawns to commercial properties, every job gets the same level of
                care and professionalism — because your property deserves a team that takes pride
                in what they do.
              </p>
            </div>

            <div className="mt-8 p-5 bg-[oklch(0.96_0.012_148)] rounded-2xl border border-[oklch(0.88_0.018_148)]">
              <div className="text-sm font-semibold text-[oklch(0.24_0.08_148)] mb-1">
                Meleton Ramirez — Owner &amp; Licensed Contractor
              </div>
              <div className="text-xs text-[oklch(0.48_0.04_148)]">
                CA Landscape Contractor License #898234 · Issued June 11, 2007 · BBB A+ · Fresno, CA
              </div>
            </div>
          </div>

          {/* Right: values */}
          <div className="space-y-4">
            {[
              {
                title: "Licensed & Verified",
                body: "CA Contractor License #898234 means your property is in the hands of a state-verified professional — not an unlicensed operator.",
              },
              {
                title: "Fast Response Times",
                body: "Customers consistently mention how quickly Tony's communicates and shows up. No waiting around, no mystery.",
              },
              {
                title: "Residential & Commercial",
                body: "From backyard lawn care to full commercial property maintenance — same standards, same professionalism, every time.",
              },
              {
                title: "Mon–Fri 9am–6pm",
                body: "Consistent hours mean you can count on service when you need it. Fresno and surrounding Central Valley areas.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[oklch(0.94_0.025_148)] text-[oklch(0.24_0.08_148)] flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[oklch(0.18_0.025_148)] text-base mb-0.5">{item.title}</div>
                  <div className="text-[oklch(0.48_0.04_148)] text-sm leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
