import Image from "next/image";
import React from "React";

const ImageComponent = (props) => {
  return (
    <div className="img-container">
      <Image
        // ref={observe}
        src={props.src}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default ImageComponent;
