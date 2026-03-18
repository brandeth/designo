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
    <article className="overflow-hidden rounded-[15px] shadow-xs grid grid-cols-1 md:max-xl:grid-cols-2 md:max-xl:h-77.5 group hover:cursor-pointer">
      <div>
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          width={image.width}
          height={image.height}
          className="h-80 w-full"
        />
      </div>

      <div className="flex flex-col md:max-xl:justify-center gap-4 bg-designo-peach-extra-light px-8 py-8 text-center transition-colors duration-400  group-hover:bg-designo-peach">
        <h3 className="preset-3 text-center text-designo-peach transition-colors duration-200 group-hover:text-designo-white">
          {title}
        </h3>
        <p className="preset-body text-designo-grey-dark transition-colors duration-200 group-hover:text-designo-white">
          {description}
        </p>
      </div>
    </article>
  );
}
