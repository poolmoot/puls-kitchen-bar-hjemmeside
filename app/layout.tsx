import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import DiningWeekPopup from "@/components/DiningWeekPopup";
import Analytics from "@/components/Analytics";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PULS Kitchen & Bar — Gastrobar i Ørestad, København",
    template: "%s | PULS Kitchen & Bar",
  },
  description:
    "Moderne gastrobar i hjertet af Ørestad. Oplev vores brunch, frokost, aftensmad og cocktails i elegante omgivelser. Åben alle ugens dage. Book bord online.",
  metadataBase: new URL("https://www.pulskitchen.dk"),
  alternates: {
    canonical: "https://www.pulskitchen.dk",
  },
  keywords: [
    "gastrobar København",
    "restaurant Ørestad",
    "brunch København",
    "PULS Kitchen Bar",
    "middag København S",
    "cocktailbar København",
  ],
  authors: [{ name: "PULS Kitchen & Bar" }],
  openGraph: {
    title: "PULS Kitchen & Bar — Gastrobar i Ørestad, København",
    description:
      "The feeling of New Yorker rawness and Parisian elegance. Brunch, frokost, aftensmad og cocktails — Arne Jacobsens Allé 9, 2300 København S.",
    type: "website",
    url: "https://www.pulskitchen.dk",
    siteName: "PULS Kitchen & Bar",
    locale: "da_DK",
    images: [
      {
        url: "/images/interior.jpeg",
        width: 1200,
        height: 630,
        alt: "PULS Kitchen & Bar — interiør",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PULS Kitchen & Bar — Gastrobar i Ørestad",
    description:
      "Moderne gastrobar i hjertet af Ørestad. Brunch, frokost, aftensmad & cocktails.",
    images: ["/images/interior.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "PULS Kitchen & Bar",
  url: "https://www.pulskitchen.dk",
  telephone: "+4532626030",
  email: "info@pulskitchen.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arne Jacobsens Allé 9",
    postalCode: "2300",
    addressLocality: "København S",
    addressCountry: "DK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.6303,
    longitude: 12.5779,
  },
  servesCuisine: ["International", "Modern European", "Gastrobar"],
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "22:00" },
  ],
  sameAs: [
    "https://www.instagram.com/pulskitchenbar/",
    "https://www.facebook.com/pulskitchenbar",
    "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html",
  ],
  image: [
    "https://www.pulskitchen.dk/images/interior.jpeg",
    "https://www.pulskitchen.dk/images/food.jpg",
  ],
  hasMenu: "https://www.pulskitchen.dk/menu",
  acceptsReservations: "True",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://book.easytable.com/book/?id=1214a&lang=auto",
    },
    result: {
      "@type": "Reservation",
      name: "Bordreservation hos PULS Kitchen & Bar",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="da"
      className={font.variable}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {/* Consent Mode v2 default — alt afvist indtil gæsten selv siger ja */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
      </head>
      <body className="font-sans bg-bone text-forest">
        <LanguageProvider>
          <TopBar />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <DiningWeekPopup />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
