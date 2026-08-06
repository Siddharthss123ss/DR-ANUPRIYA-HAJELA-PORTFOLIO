import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anupriyahajela.in"),

  title: {
    default: "Dr. Anupriya Hajela Shah | Best ENT Specialist in Bhopal",
    template: "%s | Dr. Anupriya Hajela Shah",
  },

  description:
    "Dr. Anupriya Hajela Shah is a leading ENT Specialist in Bhopal providing advanced treatment for Ear, Nose & Throat disorders, Cochlear Implant, Sinus Surgery, Allergy, Vertigo, Hearing Loss and Head & Neck Surgery.",

  keywords: [
    "ENT Doctor Bhopal",
    "Best ENT Specialist Bhopal",
    "Ear Specialist",
    "Nose Doctor",
    "Throat Doctor",
    "Sinus Specialist",
    "FESS Surgery",
    "Cochlear Implant",
    "Vertigo Treatment",
    "Voice Disorder",
    "Allergy Treatment",
    "Head Neck Surgeon",
    "Dr Anupriya Hajela Shah",
    "ENT Surgeon",
  ],

  authors: [
    {
      name: "Dr. Anupriya Hajela Shah",
    },
  ],

  creator: "Dr. Anupriya Hajela Shah",

  publisher: "Hajela Hospital",

  robots: {
    index: true,
    follow: true,
  },

  // ❌ Google Verification REMOVED - Baad mein add karenge

  openGraph: {
    title: "Best ENT Specialist in Bhopal",
    description:
      "Advanced ENT Care | Cochlear Implant | Sinus Surgery | Allergy Treatment",
    url: "https://anupriyahajela.in",
    siteName: "Dr. Anupriya Hajela Shah",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Images/Anupriya.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best ENT Specialist in Bhopal",
    description: "Advanced ENT Treatments by Dr. Anupriya Hajela Shah",
    images: ["/Images/og-image.jpg"],
  },
};

// ✅ STEP 6 — Doctor Schema (FIXED)
const doctorSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Anupriya Hajela Shah",
  image: "https://anupriyahajela.in/Images/Anupriya.jpg",
  url: "https://anupriyahajela.in",
  telephone: "+91 77778 02365",
  email: "dranupriyahajelashahentsurgeon@gmail.com", // ✅ Email updated
  medicalSpecialty: "Otolaryngology",
  jobTitle: "ENT Specialist",
  worksFor: {
    "@type": "Hospital",
    name: "Hajela Hospital",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Geetanjali Complex, Near Mata Mandir Square, Kotra Sultanabad",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462003",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:00",
  areaServed: "Bhopal",
  priceRange: "₹₹",
  // ✅ FIXED: Actual social media profiles
  sameAs: [
    "https://www.instagram.com/anupriyahajela",
    "https://www.facebook.com/share/19BTmoqF2u/"
  ],
};

// ✅ STEP 7 — Hospital Schema
const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Hajela Hospital",
  image: "https://anupriyahajela.in/Images/hos.jpeg",
  url: "https://anupriyahajela.in",
  telephone: "+91 77778 02365",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Geetanjali Complex, Near Mata Mandir Square",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462003",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹",
  medicalSpecialty: "ENT",
  areaServed: "Bhopal",
};

// ✅ STEP 8 — Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://anupriyahajela.in",
  name: "Dr. Anupriya Hajela Shah",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://anupriyahajela.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en-IN">
      <body
        className={`${poppins.className} bg-[#fafafa] text-[#1a0a2e] antialiased`}
      >
        {/* ✅ Doctor Schema */}
        <Script
          id="doctor-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(doctorSchema),
          }}
        />

        {/* ✅ Hospital Schema */}
        <Script
          id="hospital-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hospitalSchema),
          }}
        />

        {/* ✅ Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}