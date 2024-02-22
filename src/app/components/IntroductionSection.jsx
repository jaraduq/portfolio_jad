import React from "react";
import Image from "next/image";
const MY_CV = "/downloads/cv_josue_aradillas_2024.pdf";
const AVATAR_IMG = "/images/avatar.jpg";
function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-9 place-self-center text-center sm:text-left align-middle justify-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello nice to meet you!, I&apos;m {""}
            </span>
            Josue
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg lg:text-xl mb-5">
            I am a programming enthusiast looking for new challenges and a place
            to apply my programming knowledge.
          </p>
        </div>
        <div className="col-span-3 place-self-center mt-4 lg:mt-0 align-middle justify-center">
          <div className="flex justify-center items-center flex-shrink-0">
            <Image
              className="rounded-full lg:w-[250px] lg:h-[250px]"
              src="/images/webpage/avatar.jpg"
              alt="avatar image"
              width={250}
              height={250}
            />
          </div>
          <div className="flex justify-center items-center mt-4">
            <a
              href="/downloads/cv_josue_aradillas_2024.pdf"
              download="Cv_Josue_Aradillas.pdf"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-5">
                <span className="block bg-black hover:bg-slate-800 rounded-full px-2 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
