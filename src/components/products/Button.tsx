import useWindowWidth from "@/utils/hooks/useWindowWidth";
import Link from "next/link";

interface ButtonProps {
  button: string | undefined;
  url: string;
  locale: string | undefined;
}

export default function Button({ button, url, locale }: ButtonProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 600;
  const m = windowWidth > 599 && windowWidth < 1024;
  // const l = windowWidth > 1023;

  return (
    <Link href={url} target="_blank">
      <div
        className={`${
          s || m ? "h-[43px] px-[20px]" : "h-[56px] px-[36px]"
        } py-4 px-[12px] bg-[#4b38db] rounded-[10px] justify-center items-center gap-2.5 inline-flex transition-colors duration-200 ease-in-out group hover:bg-[#281a93] active:bg-[#281a93]`}
      >
        <span
          className={`text-white ${
            s || m ? "text-[16px]" : "text-[20px]"
          } font-normal ${
            locale === "ko" ? "font-pretendard" : "font-outfit"
          } leading-normal`}
        >
          {button}
        </span>
      </div>
    </Link>
  );
}
