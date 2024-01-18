import React from "react";
import Image from "next/image";
const AVATAR_IMG = "/images/avatar.jpg";
function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-9 place-self-center text-center sm:text-left align-middle justify-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello World!, I&apos;m {""}
            </span>
            Josue
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg lg:text-xl mb-5">
            Soy un entuciasta de la programacion en busca de nuevos retos y un
            lugar donde aplicar mis conocimientos en programacion.
          </p>
          {/* <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-5 bg-gradient-to-br from-blue-500 via-purple-800 to-pink-800 bg-white hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-5">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-2 py-2">
                Download CV
              </span>
            </button>
          </div> */}
        </div>
        <div className="col-span-3 place-self-center mt-4 lg:mt-0 align-middle justify-center">
          {/* <div className="rounded-full bg-blue-600 w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[170px] lg:h-[170px]"
              src="/images/avatar.jpg"
              alt="avatar image"
              width={150}
              height={150}
            />
          </div> */}
          <div className="flex justify-center items-center flex-shrink-0">
            <Image
              className="rounded-full lg:w-[250px] lg:h-[250px]"
              src="./images/avatar.jpg"
              alt="avatar image"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center mt-4">
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-5 bg-gradient-to-br from-blue-500 via-purple-800 to-pink-800 bg-white hover:bg-slate-200 text-white">
              Hire me
            </button> */}
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-5">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-2 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
