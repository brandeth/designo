import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { SiteFooterBlock } from "@/components/SiteFooterBlock";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designo - Creative agency website",
  description:
    "Designo is a multi-disciplinary design agency with a passion for creating beautiful and functional digital experiences. We specialize in web design, app design, and graphic design, and we are dedicated to delivering high-quality work that meets the needs of our clients.",
  icons: {
    icon: "/designo-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} flex flex-col bg-designo-grey-dark antialiased overflow-x-hidden max-w-360 mx-auto`}
      >
        <Navbar />

        {/* max-w-277.75 */}
        <div className="mx-auto w-full max-w-360 flex-1 z-1 bg-designo-white md:max-xl:px-6">
          <div>{children}</div>
        </div>
        <SiteFooterBlock />
      </body>
    </html>
  );
}
