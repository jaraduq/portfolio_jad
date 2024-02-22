"use client";
import React, { useTransition, useState } from "react";
import { IconContext } from "react-icons";
import { FaHtml5, FaReact, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCisco } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-between items-center gap-2 md:text-[2.5em]">
        <FaHtml5 color="#e34c26" fontSize="3.5em" />
        <FaReact color="#61dbfb" fontSize="3.5em" />
        <FaCss3Alt color="#2965f1" fontSize="3.5em" />
        <IoLogoJavascript color="#f0db4f" fontSize="3.5em" />
        <BsFiletypeSql color="#f29111" fontSize="3.5em" />
        <SiMysql color="#00758f" fontSize="3.5em" />
        <FaGitSquare color="#f1502f" fontSize="3.5em" />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      // <ul className="list-disc pl-2">
      //   <li>Universidad Autonoma de San Luis Potosí (UASLP)</li>
      // </ul>
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          className="rounded-none w-[171px] h-[71px] lg:w-[312px] lg:h-[117px]"
          src="/images/webpage/uaslp_logo.jpg"
          alt="avatar image"
          width={147}
          height={342}
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex justify-center items-center gap-2 md:text-[2.5em]">
        <SiCisco color="#009edc" fontSize="3.5em" />
      </div>
    ),
  },
];

export default function AboutMe() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };
  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <div className="text-white">
      <div className="mt-14 md:mt-6 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8   items-center">
        {/* <div
          className="text-left col-span-1 h-full justify-center align-middle aspect-video w-full"
          style={{
            background: `url(${"/images/img02.jpg"})`,
            backgroundSize: "cover",
          }}
        ></div> */}
        <div className="col-span-1 h-64 w-full relative">
          <Image
            alt="aboutmeImg"
            src="/images/webpage/ia_generated_image.jpg"
            fill
            className="object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" text-left col-span-1 h-full justify-center align-middle">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            +5 años de experiencia en desarrollo web y aplicaciones moviles,
            tengo experiencia programando tanto en front-end como en back-end.
            Me gusta aprender nuevas habilidades en mis ratos libres y
            enfrentarme a nuevos retos.
          </p>
          <div className="flex flex-row max-[320px]:flex-col justify-between mt-8">
            <TabButton
              selecTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            {/* <button onClick={() => handleTabChange("skills")}>
              <p
                className={
                  tab === "skills"
                    ? "mr-3 font-semibold hover:text-white text-white border-b border-purple-500 "
                    : "mr-3 font-semibold hover:text-white text-[#fff]"
                }
                // className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
              >
                Skills
              </p>
            </button>
            <button onClick={() => handleTabChange("education")}>
              <p
                className={
                  tab === "education"
                    ? "mr-3 font-semibold hover:text-white text-white border-b border-purple-500 "
                    : "mr-3 font-semibold hover:text-white text-[#fff]"
                }
                // className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
              >
                Education
              </p>
            </button>
            <button onClick={() => handleTabChange("certifications")}>
              <p
                className={
                  tab === "certifications"
                    ? "mr-3 font-semibold hover:text-white text-white border-b border-purple-500 "
                    : "mr-3 font-semibold hover:text-white text-[#fff]"
                }
                // className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
              >
                Certifications
              </p>
            </button> */}
          </div>
          <div className="mt-8 h-32">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="aboutmeImg"
          src="/images/img02.jpg"
          width={250}
          height={250}
          className="object-cover"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center align-middle">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            +5 anos de experiencia en desarrollo web y aplicaciones moviles,
            tengo experiencia programando tanto en front-end como en back-end.
          </p>
          <div className="flex justify-between items-center gap-1">
            <FaHtml5 color="blue" fontSize="1.5em" />
            <FaReact />
            <FaCss3Alt />
            <IoLogoJavascript />
            <BsFiletypeSql />
            <SiMysql />
            <BiLogoPostgresql />
            <FaHtml5 />
            <FaHtml5 />
            <FaHtml5 />
          </div>
         
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selecTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selecTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}
              Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div> */}
    </div>
  );
}
