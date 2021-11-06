//CORE
import React, { useRef, useEffect } from "react";
import getProjects from "../../lib/projects";
import useInView from "react-cool-inview";
import gsap from "gsap";

import ImageComponent from "../../components/ImageComponent";

import Image from "next/image";
import marked from "marked";

//COMPONENTS
import Container from "../../components/container";

if (typeof window !== "undefined") {
  var imgs = document.querySelectorAll(".img-container");
}

function Project({ projectData }) {
  const project = projectData[0].fields;

  window.addEventListener("scroll", function () {
    console.log(imgs.getBoundingClientRect());
  });

  return (
    <section className="project-content">
      <Container addClass="grid grid-cols-2 gap-6">
        <div className="copy relative ">
          <div className="inner-content sticky inset-0 p-6">
            <h2>{project.Name}</h2>
            <div
              id="content"
              className="content content-1"
              dangerouslySetInnerHTML={{
                __html: marked(project.Content),
              }}
            />
            <div
              id="content1"
              className="content"
              dangerouslySetInnerHTML={{
                __html: marked(project.Content2),
              }}
            />
            <div
              id="content2"
              className="content content-"
              dangerouslySetInnerHTML={{
                __html: marked(project.Content3),
              }}
            />
            <div
              id="content3"
              className="content"
              dangerouslySetInnerHTML={{
                __html: marked(project.Content3),
              }}
            />
          </div>
        </div>
        <div className="assets p-3">
          {project.Images.map((image, i) => {
            return (
              <ImageComponent
                key={i}
                src={image.url}
                width={image.width}
                height={image.height}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Project;

export async function getStaticProps({ params }) {
  const projects = await getProjects();
  const projectData = projects.filter(function (project) {
    return project.fields.Slug === params.id;
  });

  return {
    props: {
      projectData,
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const records = await getProjects();

  const paths = records.map((record) => ({
    params: { id: record.fields.Slug },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
