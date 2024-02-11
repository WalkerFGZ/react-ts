"use client";

import { LazyImage } from "@/components/LazyImage";
import type { MouseEventHandler } from "react";
import { random } from "lodash";
import { useState } from "react";
const randomId = () => random(1, 123);

//generate simple unique id
const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItem = {
      id: generateUniqueId(),
      url: `https://randomfox.ca/images/${randomId()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <h3 className="text-xl font-bold mt-10 text-blue-950">
          COURSE REACT WITH TYPESCRIPT
        </h3>
        <h1 className="text-3xl font-bold mt-10 text-blue-950">
          Component Lazy Image
        </h1>
        <p className="text-lg py-4 text-gray-400">
          A generic React component for loading images with lazy loading.
        </p>
      </div>

      <button
        className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-950 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-500 ring-offset-indigo-300 hover:ring-offset-indigo-500 ease focus:outline-none my-8"
        onClick={addNewFox}
      >
        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
        <span className="relative z-20 flex items-center text-sm">
          Add new fox
        </span>
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
        {images.map<JSX.Element>(({ id, url }, index) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              width={300}
              height={300}
              className="rounded-lg bg-gray-300 object-cover min-h-full min-w-full"
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
