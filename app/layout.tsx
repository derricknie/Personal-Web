import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// primarySiteUrl: https://erhan-nie-portfolio.vercel.app/
// chinaMirrorUrl: Paste the Tencent CloudBase URL here after deployment.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://erhan-nie-portfolio.vercel.app").replace(/\/$/, "");
const canonicalUrl = `${siteUrl}/`;
const title =
  "Erhan Nie Portfolio | Electrical & Computer Engineering · Digital Grid · Hardware Systems";
const description =
  "Erhan Nie is an Electrical & Computer Engineering professional with experience in digital grid, smart grid, power systems, hardware systems, analog and mixed-signal circuit design, VLSI, PCB validation, and applied machine learning.";

const keywords = [
  "Erhan Nie",
  "Nie Erhan",
  "聂尔含",
  "Erhan Nie Portfolio",
  "Electrical and Computer Engineering",
  "University of Toronto",
  "UBC Electrical Engineering",
  "China Southern Power Grid Digital Grid Group",
  "Digital Grid",
  "Smart Grid",
  "Power Systems",
  "Hardware Systems",
  "Analog Circuit Design",
  "Mixed-Signal Circuits",
  "VLSI Design",
  "Pulse Rate Monitoring IC",
  "Distance Protection",
  "Deep Reinforcement Learning",
  "Aircraft Data Bus Testing",
  "MEMS",
  "PPG Sensor",
  "MCDM",
  "4-bit Binary Subtractor",
  "Bluetooth-Controlled Clock",
  "Hovercraft",
  "Cadence",
  "PSCAD",
  "MATLAB Simulink",
  "KLayout",
  "CCStudio",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Erhan Nie",
  alternateName: ["Nie Erhan", "聂尔含"],
  url: canonicalUrl,
  image: `${siteUrl}/images/profile.jpg`,
  jobTitle: "Electrical & Computer Engineering Professional",
  worksFor: {
    "@type": "Organization",
    name: "China Southern Power Grid Digital Grid Group",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Toronto",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "The University of British Columbia",
    },
  ],
  knowsAbout: [
    "Digital grid",
    "Smart grid",
    "Power systems",
    "Hardware systems",
    "Analog circuit design",
    "Mixed-signal circuits",
    "VLSI design",
    "PCB validation",
    "Applied machine learning",
  ],
  sameAs: ["https://www.linkedin.com/in/nieerhan"],
};

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title,
  description,
  applicationName: "Erhan Nie Portfolio",
  authors: [{ name: "Erhan Nie" }],
  creator: "Erhan Nie",
  publisher: "Erhan Nie",
  alternates: {
    canonical: canonicalUrl,
  },
  keywords,
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title,
    description,
    siteName: "Erhan Nie Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1122,
        height: 1402,
        alt: "Portrait of Erhan Nie, Electrical and Computer Engineering professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8fa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
