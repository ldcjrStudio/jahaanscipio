import getProjects from "../../lib/projects";
// import Layout from "../../components/layout";
import Image from "next/image";

export default function Project({ projectData }) {
  const project = projectData[0].fields;

  return (
    // <Layout>
    <section className="project-content">
      <div className="copy">
        <h2>{project.Name}</h2>

        {/* <div
          className="content content-1"
          dangerouslySetInnerHTML={{ __html: project.Content }}
        />
        <div
          className="content content-2"
          dangerouslySetInnerHTML={{ __html: project.Content2 }}
        /> */}
      </div>
      <div className="assets">
        {/* {project.Images.map((image) => (
          <div className="img-container">
            <Image src={image.url} width={image.width} height={image.height} />
          </div>
        ))} */}
      </div>
    </section>
    // </Layout>
  );
}

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
  return {
    paths,
    fallback: false,
  };
}
