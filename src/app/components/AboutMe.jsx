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
      <div className="flex justify-center items-center flex-shrink-0">
        <Image
          className="rounded-none w-[171px] h-[71px] lg:w-[312px] lg:h-[117px]"
          src="./images/webpage/uaslp_logo.jpg"
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

  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <div className="text-white">
      <div className="mt-14 md:mt-6 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8   items-center">
        <div className="col-span-1 h-64 w-full relative">
          <Image
            alt="aboutmeImg"
            src="./images/webpage/ia_generated_image.jpg"
            fill
            className="object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className=" text-left col-span-1 h-full justify-center align-middle">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            +5 years of experience in web development and mobile applications, I
            have experience programming both front-end and back-end. I like to
            learn new skills in my free time and face new challenges.
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
          </div>
          <div className="mt-8 h-32">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
  );
}
