import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import type { Image } from "../type";

export const ImageGax = ({ images }: { images: Image[] }) => {
  const [active, setActive] = useState(0);

  const isActive = (index: number) => {
    return index === active;
  };
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm flex flex-col justify-between md:max-w-md lg:max-w-lg h-full relative self-stretch">
      <div className="h-full w-full relative">
        <AnimatePresence mode="wait">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : images.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="h-auto w-full rounded object-cover object-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex mt-20 z-200">
        <button
          onClick={handlePrev}
          className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <svg
            className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <svg
            className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
};
