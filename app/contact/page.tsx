import type { Metadata } from "next";
import { ContactUsSection } from "@/components/ContactUsSection";
import { OfficeLinksSection } from "@/components/OfficeLinksSection";

export const metadata: Metadata = {
  title: "Contact | Designo",
  description:
    "Get in touch with Designo and find the right office for your project.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid w-full max-w-277.75 grid-cols-1 bg-background text-foreground md:max-xl:max-w-172.25 gap-y-20 md:gap-y-36 pb-36">
      <ContactUsSection />
      <OfficeLinksSection />
    </main>
  );
}
