import { FC } from "react";

import { projectImages } from "@/utils/images";

const projects = [
  {
    name: "Artisan Brew Co.",
    image: projectImages.imageI,
  },
  {
    name: "Wavelength Studios",
    image: projectImages.imageII,
  },
  {
    name: "Nova Fitness",
    image: projectImages.imageIII,
  },
  {
    name: "Urban Plates",
    image: projectImages.imageIV,
  },
  {
    name: "Bloom Botanicals",
    image: projectImages.imageV,
  },
];

const Projects: FC = () => {
  return <section>Projects</section>;
};

export default Projects;
