import { PageSection } from "@/components/PageSection";

const description =
  "We build websites that serve as powerful marketing tools and bring memorable brand experiences.";

export default function WebDesignPage() {
  return (
    <main className="bg-background text-foreground">
      <PageSection title="Web Design" description={description} />
    </main>
  );
}
