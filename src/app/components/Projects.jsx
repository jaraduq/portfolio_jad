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
      "This is an App similar to Ubereats or Rapi, " +
      "We develop this app because in the comunity of Capulines San Luis Potosi " +
      "the home delivery service did not have coverage before the pandemic, " +
      "therefore the community's food businesses could not sell their products at home. " +
      "During the pandemic our application was used to order essential products and medicines.\n" +
      "The application was developed with React Native and Expo, the project consists of 3 parts, " +
      "the first part is an application for the user where they can find the restaurants or food businesses in the " +
      "community and also if they want a product that is not on the list, they can order it adding the address where you need the product. " +
      "The second part of the project is the application for the administrator who is responsible for contacting the delivery people about " +
      "new orders and sending a notice to the user if their order can be attended to or the product they are ordering is not in stock. " +
      "and the third part of the project is the API that is responsible for the communication between the user application and the administrator application.\n" +
      "I can't show the code but you can ask me the details in the interview.",
    image: "/images/projects/encorto.png",
    tag: ["All", "Apps"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Panaderia La Superior",
    description:
      "A webpage where you can order your cakes and things for partys," +
      "it was coded in C# asp .Net with Entity Framework: Code First," +
      "this page count with a UI for users where they can buy cakes at home." +
      "In addition to also taking advantage of the discounts that the store provides and you can also buy what you need for your parties" +
      "It was programmed in c# asp.net with the MVC design pattern and code first entity framework," +
      "the page has the database initialized from the code, which saves time in filling the database." +
      "You can add or remove elements from the carousel from the admin's view, " +
      "as well as add or remove new offers and products.\n" +
      "I can't show the code but you can ask me the details in the interview.",
    image: "/images/projects/logo_lasuperior.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
export default function Projects() {
  const [tag, setTag] = useState("All");
  const [keyCard, setKeyCard] = useState("none");
  const handleSelectedTag = (selectedTag) => {
    setTag(selectedTag);
  };
  const handleSelectedCard = (selectedCard) => {
    if (keyCard === "none") {
      setKeyCard(selectedCard);
    } else {
      setKeyCard("none");
    }
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
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            selected={project.id === keyCard}
            onSelectCard={handleSelectedCard}
            idCard={project.id}
          />
        ))}
      </div>
    </>
  );
}
