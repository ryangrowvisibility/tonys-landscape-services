export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    name: "Tony's Landscape Services",
    description:
      "CA Licensed Landscape Contractor #898234 serving Fresno, CA since 2007. Lawn maintenance, landscape design, tree trimming, irrigation, and yard cleanup.",
    url: "https://tonys-landscape-services.vercel.app",
    telephone: "+15593527859",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3365 W Bullard Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93711",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8252,
      longitude: -119.8376,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.0",
      reviewCount: "4",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California Landscape Contractor License #898234",
    },
    areaServed: {
      "@type": "Place",
      name: "Fresno, CA and surrounding Central Valley",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.yelp.com/biz/tonys-landscape-service-fresno",
      "https://nextdoor.com/pages/tonys-landscaping-fresno-ca/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
