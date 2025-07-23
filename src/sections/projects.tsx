import { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { projects } from "@/configs/site";

const Projects: FC = () => {
  return (
    <section className="section">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image, href }) => (
            <Link
              href={href}
              key={name}
              className="border-t last:border-b md:py-8 lg:py-10 py-6 border-stone-400 border-dotted flex flex-col"
            >
              <div className="">
                <div className="aspect-video md:hidden">
                  <Image
                    className="size-full object-cover"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="mt-8 flex md:mt-0 justify-between items-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
