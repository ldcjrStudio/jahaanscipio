//CORE
import { useRef, useState, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectContext } from "../context/projectContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import List from "../components/List";
import Item from "../components/Item";

//FUNCTIONS
import getProjects from "../lib/projects";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Home({ projects }) {
  const { id } = useContext(ProjectContext);
  console.log(id);

  const days = [25, 26, 27, 28, 29];
  const [expandedDay, setCollapsedDay] = useState();

  const projectRef = useRef([]);
  const [projectOpen, setProjectOpen] = useState(false);
  const openProjectDrawer = (event) => {
    setProjectOpen(true);
    let element = event.target.closest(".project-item");

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    let leftDistance = element.getBoundingClientRect().left;
    let topDistance = element.getBoundingClientRect().top;

    console.log(element.getBoundingClientRect());

    let transformX = windowWidth / 2 - leftDistance * 2 + "px";

    console.log(transformX);

    gsap.to(element, {
      height: "420px",
      width: "420px",
      zIndex: "100",
    });
  };
  // const handleMouseEnter = (event) => {
  //   // console.log(projectRef.current);
  //   console.log(event.target.value);
  //   gsap.to(projectRef.current[1], { scale: "1.2", duration: ".3" });
  // };
  // const handleMouseLeave = () => {
  //   console.log(projectRef.current);
  //   gsap.to(projectRef.current, {
  //     scale: "1",
  //     duration: ".3",
  //   });
  // };

  function handleMouseEnter(event) {
    if (!projectOpen) {
      let element = event.target.closest(".project-item");
      gsap.to(element, { scale: "1.2", duration: ".3", yoyo: true });
    }
  }
  function handleMouseLeave(event) {
    if (!projectOpen) {
      let element = event.target.closest(".project-item");
      gsap.to(element, {
        scale: "1",
        duration: ".3",
      });
    }
  }

  return (
    <main className="w-screen h-screen relative">
      <section
        id="projects-container"
        className="h-full mx-auto flex justify-center items-center flex-wrap"
      >
        {projects.map((project, i) =>
          project.fields.Status === "live" ? (
            <ProjectCard
              key={i}
              onClick={openProjectDrawer}
              project={project}
            />
          ) : (
            ""
          )
        )}
      </section>
    </main>
  );
}

export async function getStaticProps({}) {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
