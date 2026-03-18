import type { StaticImageData } from "next/image";

import boxedWaterImage from "@/public/images/image-boxed-water.jpg";
import changeImage from "@/public/images/image-change.jpg";
import scienceImage from "@/public/images/image-science.jpg";
import { PageSection } from "@/components/PageSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Services } from "@/components/Services";

const description = `We deliver eye-catching branding materials that are tailored to meet your business objectives.`;

type GraphicDesignProject = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const graphicDesignProjects: GraphicDesignProject[] = [
  {
    title: "TIM BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: changeImage,
    alt: "Tim Brown Change book cover preview",
  },
  {
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
    image: boxedWaterImage,
    alt: "Boxed Water packaging concept preview",
  },
  {
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
    image: scienceImage,
    alt: "Science poster project preview",
  },
];

export default function GraphicDesignPage() {
  return (
    <main className="bg-background text-foreground mb-12 grid gap-y-20 md:max-xl:gap-y-26 md:max-xl:max-w-172.25 mx-auto xl:max-w-277.75">
      <PageSection title="Graphic Design" description={description} />

      <section
        className="max-w-81.75 md:max-w-none md:px-0 mx-auto"
        aria-label="Graphic design projects"
      >
        <div className="mx-auto grid max-w-277.75 gap-10 md:gap-8 xl:grid-cols-3">
          {graphicDesignProjects.map((project) => (
            <ProjectCard
              key={project.title}
              image={{
                src: project.image,
                width: project.image.width,
                height: project.image.height,
                alt: project.alt,
              }}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      <Services excludedHref="/graphic-design" />
    </main>
  );
}