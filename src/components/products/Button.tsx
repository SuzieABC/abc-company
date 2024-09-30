import useWindowWidth from "@/utils/hooks/useWindowWidth";

export default function Button() {
  const windowWidth = useWindowWidth();

  const s = windowWidth < 1024;
  const m = windowWidth > 1023 && windowWidth < 1440;
  const l = windowWidth > 1439;

  return (
    <button>
      <div
        className={`px-[20px] ${
          s ? "w-[123px] h-[43px]" : "w-[175px] h-[56px]"
        } py-4 bg-[#4b38db] rounded-[10px] justify-center items-center gap-2.5 inline-flex`}
      >
        <span
          className={`text-white ${
            s ? "text-[16px]" : "text-[20px]"
          } font-normal font-['Outfit'] leading-normal`}
        >
          Learn More
        </span>
      </div>
    </button>
  );
}
