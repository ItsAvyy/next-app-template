import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/SiteHeader"
import { ThemeProvider } from "@/components/ThemeProvider"
import "@/styles/globals.css"
import { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Next.js template for building apps with Radix UI and Tailwind CSS",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
  authors: [{ name: "shadcn", url: "https://shadcn.com/" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  openGraph: {
    title: "Next.js",
    description:
      "Next.js template for building apps with Radix UI and Tailwind CSS",
    url: "https://template.shadcn.com/",
    siteName: "Next.js",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js template",
    description:
      "Next.js template for building apps with Radix UI and Tailwind CSS",
    creator: "@shadcn",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900  dark:text-slate-50",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
