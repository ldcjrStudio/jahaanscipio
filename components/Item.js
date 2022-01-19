import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState, useContext } from "react";
import { ProjectContext } from "../context/projectContext";

export default function Item({ id, projects }) {
  const { updateSelected } = useContext(ProjectContext);

  const [newName, setNewName] = useState(id);
  const [newImage, setNewImage] = useState("");
  const [slug, setNewSlug] = useState("");
  useEffect(() => {
    projects.find((item) => {
      if (item.id === id) {
        setNewName(item.id);
        setNewImage(item.fields.Images[0].url);
        setNewSlug(item.fields.Slug);
        console.log("slug");
      }
    });
  }, [id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        // className="overlay"
        transition={{ duration: 0.2, delay: 0.15 }}
      ></motion.div>

      <div className="card-content-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="card-content"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container${id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="item-img-wrapper relative w-40 h-40">
              {newImage !== "" && (
                <Image alt="" src={newImage} layout="fill" objectFit="cover" />
              )}
            </div>
          </motion.div>

          <h1
            onClick={() => {
              updateSelected(undefined);
            }}
          >
            close
          </h1>

          <Link href={`/projects/${slug}`}>
            <a>{slug}</a>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
