import { Crown } from "@/public/svg";
import Image from "next/image";
import { Container } from "./container";

interface SectionInfoProps {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  subTitle?: string;
  invertContent?: boolean;
}

export function SectionInfo({
  title,
  text,
  image,
  subTitle,
  invertContent,
}: SectionInfoProps) {
  return (
    <section className="_p-section">
      <Container>
        <div
          className={`${
            invertContent && "flex-row-reverse"
          } flex flex-col items-center`}
        >
          {subTitle && (
            <span className="_sub-title flex gap-2 mb-2 text-sm text-verde font-light uppercase items-center">
              <Crown />
              {subTitle}
              <Crown />
            </span>
          )}
          <h2 className="_title">{title}</h2>
        </div>

        <div className="flex justify-between w-full gap-10 laptop:flex-col laptop:items-center laptop:gap-0">
          <div
            className={`_bag-image max-w-lg w-full ${
              !invertContent && "laptop: _margin-25b"
            }`}
          >
            <Image fill src={image.src} alt={image.alt} />
          </div>
          <div
            className={`max-w-md w-full _text laptop:max-w-full ${
              invertContent && "laptop: _margin-25b"
            }`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Container>
    </section>
  );
}
