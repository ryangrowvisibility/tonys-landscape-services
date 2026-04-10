export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-16 bg-[oklch(0.985_0.006_148)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* License badge */}
            <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 bg-[oklch(0.94_0.025_148)] text-[oklch(0.24_0.08_148)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              CA License #898234 · BBB A+
            </div>

            <h1 className="animate-fade-up stagger-2 font-display font-extrabold text-[oklch(0.18_0.025_148)] leading-[1.05] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Fresno&apos;s Trusted<br />
              <span className="text-[oklch(0.24_0.08_148)]">Licensed</span><br />
              Landscaper
            </h1>

            <p className="animate-fade-up stagger-3 text-lg text-[oklch(0.40_0.05_148)] leading-relaxed mb-8 max-w-lg">
              Serving Fresno and the Central Valley since 2007. Professional lawn maintenance,
              landscape design, irrigation, and tree care — done right the first time.
            </p>

            {/* Trust chips */}
            <div className="animate-fade-up stagger-4 flex flex-wrap gap-3 mb-10">
              {[
                "Since 2007",
                "18+ Years Experience",
                "Licensed & Insured",
                "Fast Response",
              ].map((tag) => (
                <span key={tag} className="bg-white text-[oklch(0.38_0.09_148)] text-sm font-medium px-3 py-1.5 rounded-lg border border-[oklch(0.88_0.018_148)]">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up stagger-5 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5593527859"
                className="bg-[oklch(0.24_0.08_148)] text-white font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.30_0.08_148)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                Call (559) 352-7859
              </a>
              <a
                href="#services"
                className="bg-[oklch(0.94_0.025_148)] text-[oklch(0.24_0.08_148)] font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.90_0.030_148)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="animate-fade-up stagger-3 lg:justify-self-end w-full max-w-sm">
            <div className="bg-white rounded-2xl border border-[oklch(0.88_0.018_148)] p-8 shadow-sm">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.64 0.13 80)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.64 0.13 80)" strokeWidth="1.5" aria-hidden="true">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              </div>
              <p className="text-sm text-[oklch(0.48_0.04_148)] mb-6">4.0 · Google Reviews</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[oklch(0.96_0.012_148)] rounded-xl p-4">
                  <div className="font-display font-bold text-[oklch(0.24_0.08_148)] text-2xl">18+</div>
                  <div className="text-xs text-[oklch(0.48_0.04_148)] mt-0.5">Years in Business</div>
                </div>
                <div className="bg-[oklch(0.96_0.012_148)] rounded-xl p-4">
                  <div className="font-display font-bold text-[oklch(0.24_0.08_148)] text-2xl">BBB</div>
                  <div className="text-xs text-[oklch(0.48_0.04_148)] mt-0.5">A+ Rated</div>
                </div>
                <div className="bg-[oklch(0.96_0.012_148)] rounded-xl p-4">
                  <div className="font-display font-bold text-[oklch(0.24_0.08_148)] text-2xl">CA</div>
                  <div className="text-xs text-[oklch(0.48_0.04_148)] mt-0.5">Licensed #898234</div>
                </div>
                <div className="bg-[oklch(0.96_0.012_148)] rounded-xl p-4">
                  <div className="font-display font-bold text-[oklch(0.24_0.08_148)] text-2xl">6</div>
                  <div className="text-xs text-[oklch(0.48_0.04_148)] mt-0.5">Core Services</div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full bg-[oklch(0.64_0.13_80)] text-white font-semibold text-sm py-3 rounded-xl text-center hover:bg-[oklch(0.58_0.13_78)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
