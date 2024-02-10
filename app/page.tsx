"use client";

import type { MouseEventHandler } from "react";
import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";
const random = () => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

type ImageItem = { id: string; url: string };
export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
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
