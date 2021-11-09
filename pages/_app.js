import "../styles/global.scss";
import Layout from "../components/layout";
import ProjectProvider from "../context/projectContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ProjectProvider>
  );
}

export default MyApp;
