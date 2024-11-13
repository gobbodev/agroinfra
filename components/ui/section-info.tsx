import Image from "next/image";
import { Container } from "./container";
import { Title } from "./title";

interface SectionInfoProps {
  id?: string;
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  subTitle?: string;
  darkMode?: boolean;
  invertContent?: boolean;
  invertDirection?: boolean;
}

export function SectionInfo({
  id,
  title,
  text,
  image,
  subTitle,
  darkMode,
  invertContent,
  invertDirection,
}: SectionInfoProps) {
  return (
    <section id={id} className={`relative z-10 ${darkMode && "bg-preto"} _p-section`}>
      <Container>
        <Title darkMode={darkMode} title={title} subTitle={subTitle} />
        <div
          className={`
          ${invertDirection && "flex-col"} 
          ${invertContent && "flex-row-reverse"}

          flex justify-between w-full gap-10 items-center laptop:flex-col laptop:gap-0`}
        >
          <div
            className={`
            ${!invertContent && "laptop:_margin-25b"}
            ${invertDirection && "max-w-md"}
            
            _bag-image max-w-lg w-full 
            `}
          >
            <Image fill src={image.src} alt={image.alt} />
          </div>

          <div
            className={`
              ${invertContent && "laptop:_margin-25b"}
              ${invertDirection && "!max-w-full"}
              ${darkMode ? "text-branco" : "text-preto"}
              
              _text max-w-md w-full laptop:max-w-full 
              `}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </Container>
    </section>
  );
}
