import type { StaticImageData } from "next/image";

import airfilterImage from "@/public/images/image-airfilter.jpg";
import eyecamImage from "@/public/images/image-eyecam.jpg";
import faceitImage from "@/public/images/image-faceit.jpg";
import loopstudiosImage from "@/public/images/image-loopstudios.jpg";
import todoImage from "@/public/images/image-todo.jpg";
import { PageSection } from "@/components/PageSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Services } from "@/components/Services";

const description = `Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.`;

type AppDesignProject = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const appDesignProjects: AppDesignProject[] = [
  {
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: airfilterImage,
    alt: "Airfilter app project preview",
  },
  {
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: eyecamImage,
    alt: "Eyecam app project preview",
  },
  {
    title: "FACEIT",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    image: faceitImage,
    alt: "Faceit app project preview",
  },
  {
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
    image: todoImage,
    alt: "Todo app project preview",
  },
  {
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
    image: loopstudiosImage,
    alt: "Loopstudios app project preview",
  },
];

export default function AppDesignPage() {
  return (
    <main className="bg-background text-foreground mb-12 grid gap-y-20 md:max-xl:gap-y-26 md:max-xl:max-w-172.25 mx-auto xl:max-w-277.75">
      <PageSection title="App Design" description={description} />

      <section
        className="max-w-81.75 md:max-w-none md:px-0 mx-auto"
        aria-label="App design projects"
      >
        <div className="mx-auto grid max-w-277.75 gap-10 md:gap-8 xl:grid-cols-3">
          {appDesignProjects.map((project) => (
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

      <Services excludedHref="/app-design" />
    </main>
  );
}
