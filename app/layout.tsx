import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import "./globals.css";

const SITE_URL = "https://samp231004.github.io/Portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Samarth Patel | Software Engineer & Full-Stack Developer",
    template: "%s | Samarth Patel",
  },
  description:
    "Software Engineer and Full-Stack Developer building production-ready SaaS applications, backend systems, web platforms, and mobile applications using Java, Spring Boot, React, Next.js, Node.js, React Native, and cloud technologies.",
  keywords: [
    "Samarth Patel",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "Software Developer Portfolio",
  ],
  authors: [{ name: "Samarth Patel", url: SITE_URL }],
  creator: "Samarth Patel",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Samarth Patel | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer and Full-Stack Developer building production-ready SaaS applications, backend systems, web platforms, and mobile applications.",
    siteName: "Samarth Patel Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/142706204?s=400&u=b3c8475886140f835b78c2b9da47bbc0cde0b840&v=4",
        width: 400,
        height: 400,
        alt: "Samarth Patel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarth Patel | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer and Full-Stack Developer building production-ready applications.",
    creator: "@SamP231004",
    images: [
      "https://avatars.githubusercontent.com/u/142706204?s=400&u=b3c8475886140f835b78c2b9da47bbc0cde0b840&v=4",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samarth Patel",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  email: "mailto:samp231004@gmail.com",
  telephone: "+91-8320181139",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: [
    "https://github.com/SamP231004",
    "https://www.linkedin.com/in/samp231004/",
    "https://x.com/SamP231004",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-background text-foreground selection:bg-accent/30 selection:text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <ThemeProvider defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
