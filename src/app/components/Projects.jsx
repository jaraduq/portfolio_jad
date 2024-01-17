"use client";
import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "EnCortoApp",
    description:
      "This is an App similar to Ubereats or Rapi, We develop this app because in the comunity of Capulines San Luis Potosi the ",
    image: "/images/projects/a_girl.jpg",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Panaderia La Superior",
    description:
      "A webpage where you can order your cakes and things for partys,it was coded in C# asp .Net with Entity Framework: Code First, this page count with a UI for users where they can buy cakes at ",
    image: "/images/projects/a_girl.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
export default function Projects() {
  const [tag, setTag] = useState("All");

  const handleSelectedTag = (selectedTag) => {
    setTag(selectedTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2>My Proyects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-5">
        <ProjectsTag
          nameTag={"All"}
          onSelectTag={handleSelectedTag}
          selected={tag === "All"}
        />
        <ProjectsTag
          nameTag={"Web"}
          onSelectTag={handleSelectedTag}
          selected={tag === "Web"}
        />
        <ProjectsTag
          nameTag={"Apps"}
          onSelectTag={handleSelectedTag}
          selected={tag === "Apps"}
        />
      </div>
      <div className="m-2 grid grid-cols-12 gap-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="col-span-6 md:col-span-4 lg:col-span-3"
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
}
