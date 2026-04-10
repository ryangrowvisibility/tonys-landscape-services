export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.18_0.025_148)] text-[oklch(0.75_0.04_148)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <span className="font-display font-semibold text-white">Tony&apos;s Landscape Services</span>
          <span className="mx-2 opacity-40">·</span>
          CA License #898234
          <span className="mx-2 opacity-40">·</span>
          Fresno, CA
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.yelp.com/biz/tonys-landscape-service-fresno" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-150" aria-label="Tony's Landscape on Yelp">
            Yelp
          </a>
          <a href="https://nextdoor.com/pages/tonys-landscaping-fresno-ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-150" aria-label="Tony's Landscape on Nextdoor">
            Nextdoor
          </a>
          <span className="opacity-40">&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
