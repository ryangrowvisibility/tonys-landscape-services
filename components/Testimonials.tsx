const testimonials = [
  {
    text: "The best landscaping service in Fresno. Their team is professional, respectful, and genuinely impressive with communication — they kept me updated every step of the way.",
    author: "Alexander Soto",
    detail: "Fresno homeowner",
  },
  {
    text: "Quick, friendly, and professional. I couldn't ask for more from a landscaping crew. They came out fast, got the job done right, and left everything cleaner than they found it.",
    author: "Joe Milianta",
    detail: "Fresno resident",
  },
  {
    text: "Great service at a great price. The team was highly professional throughout the entire project — clearly people who take real pride in their work.",
    author: "John Simms",
    detail: "Fresno homeowner",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[oklch(0.985_0.006_148)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.64_0.13_80)] text-sm font-semibold uppercase tracking-widest mb-3">
            What Customers Say
          </p>
          <h2 className="font-display font-bold text-[oklch(0.18_0.025_148)] text-4xl lg:text-5xl">
            Trusted by Fresno homeowners
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`bg-white rounded-2xl p-7 border border-[oklch(0.88_0.018_148)] animate-fade-up stagger-${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.64 0.13 80)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-[oklch(0.28_0.03_148)] text-base leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <footer>
                <cite className="not-italic">
                  <span className="font-semibold text-[oklch(0.18_0.025_148)] block text-sm">{t.author}</span>
                  <span className="text-[oklch(0.48_0.04_148)] text-xs">{t.detail}</span>
                </cite>
              </footer>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a
            href="https://www.yelp.com/biz/tonys-landscape-service-fresno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.38_0.09_148)] hover:text-[oklch(0.24_0.08_148)] font-medium transition-colors duration-150 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            View on Yelp
          </a>
          <a
            href="https://nextdoor.com/pages/tonys-landscaping-fresno-ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.38_0.09_148)] hover:text-[oklch(0.24_0.08_148)] font-medium transition-colors duration-150 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            View on Nextdoor
          </a>
        </div>
      </div>
    </section>
  );
}
