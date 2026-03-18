import type { StaticImageData } from "next/image";

import blogrImage from "@/public/images/blogr.png";
import builderImage from "@/public/images/builder.png";
import campImage from "@/public/images/camp.png";
import expressImage from "@/public/images/express.png";
import photonImage from "@/public/images/photon.png";
import transferImage from "@/public/images/transfer.png";
import { PageSection } from "@/components/PageSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Services } from "@/components/Services";

const description = `We build websites that serve as powerful marketing tools and bring memorable brand experiences.`;

type WebDesignProject = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const webDesignProjects: WebDesignProject[] = [
  {
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses.",
    image: expressImage,
    alt: "Express multi-carrier shipping website preview",
  },
  {
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: transferImage,
    alt: "Transfer money app landing page preview",
  },
  {
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImage,
    alt: "Photon music player website preview",
  },
  {
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
    image: builderImage,
    alt: "Builder contractor matching website preview",
  },
  {
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
    image: blogrImage,
    alt: "Blogr publishing platform website preview",
  },
  {
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    image: campImage,
    alt: "Camp digital training website preview",
  },
];

export default function WebDesignPage() {
  return (
    <main className="bg-background text-foreground mb-12 grid gap-y-20 md:max-xl:gap-y-26 md:max-xl:max-w-172.25 mx-auto xl:max-w-277.75">
      <PageSection title="Web Design" description={description} />
      {/* py-30 px-6*/}
      <section
        className="max-w-81.75 md:max-w-none md:px-0 mx-auto"
        aria-label="Web design projects"
      >
        <div className="mx-auto grid max-w-277.75 gap-10 md:gap-8 xl:grid-cols-3">
          {webDesignProjects.map((project) => (
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

      <Services excludedHref="/web-design" />
    </main>
  );
}
