import useWindowWidth from "@/utils/hooks/useWindowWidth";

interface ButtonProps {
  button: string | undefined;
}

export default function Button({ button }: ButtonProps) {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <button>
      <div
        className={`px-[20px] ${
          s ? " h-[43px] mb-[15px]" : "h-[56px]"
        } py-4 px-[12px] bg-[#4b38db] rounded-[10px] justify-center items-center gap-2.5 inline-flex`}
      >
        <span
          className={`text-white ${
            s ? "text-[16px]" : "text-[20px]"
          } font-normal font-['Outfit'] leading-normal`}
        >
          {button}
        </span>
      </div>
    </button>
  );
}
