import Image, { type ImageProps } from "next/image";

type ProjectCardProps = {
  image: {
    src: ImageProps["src"];
    width: number;
    height: number;
    alt?: string;
  };
  title: string;
  description: string;
};

export function ProjectCard({ image, title, description }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[15px] shadow-xs">
      <div>
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          width={image.width}
          height={image.height}
          className="h-80 w-full"
        />
      </div>

      <div className="flex flex-col gap-4 bg-designo-peach-extra-light px-8 py-8 text-center">
        <h3 className="preset-3 text-center text-designo-peach">{title}</h3>
        <p className="preset-body text-designo-grey-dark">{description}</p>
      </div>
    </article>
  );
}
