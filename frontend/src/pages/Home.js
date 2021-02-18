import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

export default function Home() {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      console.log(data);
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      <h1 className="title">Home</h1>
      {imageIds &&
        imageIds.map((imageId, idx) => {
          return (
            <Image
              key={idx}
              cloudName="anstagram123"
              publicId={imageId}
              width="300"
              crop="scale"
            />
          );
        })}
    </div>
  );
}
