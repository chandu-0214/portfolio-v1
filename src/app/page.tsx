import Design from "./components/bgDesigner/Design";
import { HiMinus } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { MultiStepLoaderDemo } from "./AddOnComponents/MultiStepLoaderDemo";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-black h-screen items-center justify-between p-2">
      <Design />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col ">
        <h1 className="text-[calc(4vw+30px)] md:text-[calc(3vw+40px)] lg:text-[calc(2vw+50px)] xs:text-[30px] font-black  text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 bg-clip-text">
          <span className="hello-emoji inline-block transform hover:rotate-12  transition duration-300 delay-100 bg-transparent text-black ">
            👋
          </span>{" "}
          I&rsquo;m Chandrashekhar{" "}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6 text-sm md:text-base font-bold shadow-xl xs:text-white px-3 py-3 xs:w-auto  xs:text-[10px]">
          <h2 className="tracking-[2px]   ">DEVELOPER</h2>
          <HiMinus className="text-lg rotate-90" />
          <h2 className="tracking-[2px] ">TEACHER</h2>
          <HiMinus className="text-lg rotate-90" />
          <h2 className="tracking-[2px]  ">MENTOR</h2>
        </div>
        <Link href={"/portfolio"} className=" mt-2">
          <button className="btn btn-outline  hover:scale-125 text-lg xs:btn-info">
            Explore Now ! <FaLocationArrow />
          </button>
        </Link>
      </div>
    </main>
  );
}
