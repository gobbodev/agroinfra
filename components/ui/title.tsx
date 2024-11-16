import { Crown } from "@/public/svg";

interface TitleProps {
  title: string;
  subTitle?: string;
  darkMode?: boolean;
}

export function Title({ title, subTitle, darkMode }: TitleProps) {
  return (
    <>
      <div className={`flex flex-col items-center`}>
        {subTitle && (
          <p
            className={`_sub-title _margin-8b flex gap-2 text-sm text-verde font-light uppercase items-center`}
          >
            <Crown />
            {subTitle}
            <Crown />
          </p>
        )}
        <h2 className={`${darkMode ? "text-branco" : "text-preto"} _title`}>
          {title}
        </h2>
      </div>
    </>
  );
}
