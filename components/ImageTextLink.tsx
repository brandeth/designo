import Image from "next/image";

import { Button } from "./Button";

export type ImageTextLinkProps = {
  title: string;
  imageSrc: string;
  href: string;
};

export function ImageTextLink({ title, imageSrc, href }: ImageTextLinkProps) {
  return (
    <article className="grid h-91 grid-cols-1 grid-rows-[1fr_auto] justify-between overflow-hidden rounded-[15px] bg-designo-white">
      <div className="flex items-center justify-center px-6">
        <Image
          src={imageSrc}
          alt={title}
          width={202}
          height={202}
          sizes="202px"
          className="h-auto w-auto"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 px-6 pb-10 text-center">
        <h2 className="preset-3 text-designo-grey-dark uppercase">{title}</h2>

        <Button href={href} variant="primary">
          See Location
        </Button>
      </div>
    </article>
  );
}
