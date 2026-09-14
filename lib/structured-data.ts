// lib/structured-data.ts
// Add this to your app/layout.tsx for enhanced SEO with JSON-LD structured data

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hitesh Bhoi",
  url: "https://imhitesh.vercel.app",
  description:
    "Full Stack Software Engineer specializing in web development and app development with 3+ years of experience.",
  image: "https://imhitesh.vercel.app/og.png",
  email: "your-email@example.com", // Add your email
  jobTitle: "Full Stack Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Self-employed",
  },
  sameAs: [
    "https://linkedin.com/in/your-profile", // Update with your LinkedIn
    "https://github.com/your-profile", // Update with your GitHub
    "https://twitter.com/your-profile", // Update with your Twitter
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hitesh Bhoi - Web Development Services",
  url: "https://imhitesh.vercel.app",
  logo: "https://imhitesh.vercel.app/logo.png",
  description:
    "Professional web development and app development services by Hitesh Bhoi",
  sameAs: [
    "https://linkedin.com/in/your-profile",
    "https://github.com/your-profile",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN", // Update with your country
    // addressLocality: "City Name", // Optional
    // postalCode: "123456", // Optional
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  description:
    "Custom web development, app development, and IT services including full-stack applications, responsive design, and e-commerce solutions.",
  provider: {
    "@type": "Person",
    name: "Hitesh Bhoi",
    url: "https://imhitesh.vercel.app",
  },
  areaServed: "Worldwide",
  availableLanguage: "en",
  serviceType: [
    "Web Development",
    "App Development",
    "Full Stack Development",
    "Custom Web Applications",
    "E-commerce Development",
    "Responsive Design",
  ],
};

/**
 * HOW TO USE:
 * 
 * 1. Add this to your app/layout.tsx (inside the RootLayout component, in the <head>):
 * 
 *    <script
 *      type="application/ld+json"
 *      dangerouslySetInnerHTML={{
 *        __html: JSON.stringify(personSchema),
 *      }}
 *    />
 * 
 * 2. You can add multiple schemas in the same layout:
 * 
 *    <script
 *      type="application/ld+json"
 *      dangerouslySetInnerHTML={{
 *        __html: JSON.stringify([personSchema, serviceSchema]),
 *      }}
 *    />
 * 
 * 3. Validate your structured data at: https://validator.schema.org/
 */
