import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Link from "next/link";

interface ButtonProps {
  button: string | undefined;
  url: string;
  locale: string | undefined;
}

export default function Button({ button, url, locale }: ButtonProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <Link href={url} target="_blank">
      <div
        className={`${
          s ? "h-[43px] mb-[15px] px-[20px] " : "h-[56px] px-[36px] "
        } py-4 px-[12px] bg-[#4b38db] rounded-[10px] justify-center items-center gap-2.5 inline-flex`}
      >
        <span
          className={`text-white ${
            s ? "text-[16px]" : "text-[20px]"
          } font-normal ${
            locale === "ko" ? "font-['Pretendard']" : "font-['Outfit']"
          } leading-normal`}
        >
          {button}
        </span>
      </div>
    </Link>
  );
}
