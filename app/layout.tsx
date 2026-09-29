import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bilal | Website Support, Graphic Design & Email Specialist",
  description:
    "Reliable remote website support, responsive fixes, graphic design, HTML email development and production support for small businesses and agencies.",
  keywords: [
    "Website Support Specialist",
    "Remote Website Support",
    "WordPress Website Support",
    "Joomla Support",
    "Elementor Website Support",
    "Responsive Website Fixes",
    "Graphic Design Services",
    "HTML Email Development",
    "Email Newsletter Design",
    "Landing Page Design",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bilal | Design, Website & Digital Support",
    description:
      "A reliable remote digital partner for website, design and email production work.",
    url: "/",
    siteName: "Bilal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal | Design, Website & Digital Support",
    description:
      "Reliable remote website, design and email support for businesses and agencies.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#101114" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bilal",
    url: siteUrl,
    email: "mailto:bbilalaali@gmail.com",
    jobTitle: "Website Support, Graphic Design and Email Specialist",
    knowsAbout: [
      "Website support",
      "Responsive web development",
      "WordPress",
      "Joomla",
      "Graphic design",
      "HTML email development",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Bilal Design and Website Support",
    url: siteUrl,
    email: "mailto:bbilalaali@gmail.com",
    description:
      "Remote website support, graphic design, HTML email and digital production services for small businesses and agencies.",
    areaServed: "Worldwide",
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </body>
    </html>
  );
}
