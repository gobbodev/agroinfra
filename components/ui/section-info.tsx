import { Crown } from "@/public/svg";
import Image from "next/image";

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
}: SectionInfoProps) {
  return (
    <section className="_p-section">
      <div className="flex flex-col items-center">
        {subTitle && (
          <span className="_sub-title flex gap-2 mb-2 text-sm text-verde font-light uppercase items-center">
            <Crown />
            {subTitle}
            <Crown />
          </span>
        )}
        <h2 className="_title">{title}</h2>
      </div>

      <div className="flex justify-between w-full">
        <div className="_bag-image max-w-md w-full">
          <Image fill src={image.src} alt={image.alt} />
        </div>
        <div
          className="max-w-md w-full _text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
}
