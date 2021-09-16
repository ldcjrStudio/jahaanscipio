//CORE
import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import ProjectModal from "../components/ProjectModal";

//FUNCTIONS
import getProjects from "../lib/projects";

export default function Home({ projects }) {
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
    <section className="w-screen h-screen relative">
      <div
        className={`bg-blend-overlay bg-gray-600 opacity-50 absolute left-0 top-0 w-screen h-screen ${
          projectOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        id="projects-container"
        className="h-full max-w-5xl mx-auto flex justify-around items-center"
      >
        {projects.map((project, i) =>
          project.fields.Status === "live" ? (
            <div
              key={project.id}
              className="project-item border-2 border-black bg-white relative"
              onClick={openProjectDrawer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={(ref) => projectRef.current.push(ref)}
            >
              <div className="img-wrapper p-3">
                <Image
                  alt={project.fields.Name}
                  src={project.fields.Images[0].url}
                  width="175"
                  height="175"
                />
              </div>
              <div className="px-3 border-t-2 border-black bg-white">
                {" "}
                <p>{project.fields.Name}</p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
}

export async function getStaticProps({}) {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}
