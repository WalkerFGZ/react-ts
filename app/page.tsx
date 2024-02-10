"use client";

import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";
const random = () => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

type ImageItems = { id: string; url: string };
export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox = () => {
    const newImageItem = {
      id: generateUniqueId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map<JSX.Element>(({ id, url }) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} alt="fox image" />
        </div>
      ))}
    </div>
  );
}
