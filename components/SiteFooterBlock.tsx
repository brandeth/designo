"use client";

import { usePathname } from "next/navigation";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

type SiteFooterBlockProps = Readonly<{
  showCta?: boolean;
}>;

export function SiteFooterBlock({ showCta = true }: SiteFooterBlockProps) {
  const pathname = usePathname();
  const shouldShowCta = showCta && pathname !== "/contact";

  const footerClassName = shouldShowCta
    ? "pt-40 sm:pt-44 lg:pt-[151.82px]"
    : undefined;

  return (
    <>
      {/* -mb-24 sm:-mb-24 lg:-mb-17 mt-12 bottom-2 */}
      <div className="relative bg-designo-white -mt-6">
        {shouldShowCta ? (
          <div>
            <CtaSection />
          </div>
        ) : null}
        <Footer className={footerClassName} />
      </div>
    </>
  );
}
