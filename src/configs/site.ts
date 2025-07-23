import { projectImages, testimonialImages } from "@/utils/images";

export const links = {
  instagram: "https://instagram.com/ibrahimraimi",
  twitter: "https://twitter.com/ibrahimraimi_",
  linkedin: "https://linkedin/in/ibrahimraimi",
  github: "https://github.com/ibrahimraimi",
  siteurl: "https://ibrahimraimi.com",
};

export const siteConfig = {
  name: "Ibrahim Raimi",
  description: "",
  url: links.siteurl,
  ogImage: `${links.siteurl}/opengraph-image.png`,
  links: {
    twitter: links.twitter,
    github: links.github,
  },
};

// Navigation Links
export const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// Projects
export const projects = [
  {
    name: "Noirstalga Avenue",
    image: projectImages.imageI,
    href: "https://noirstalgiaavenue.com",
  },
  {
    name: "Bruno Arizio",
    image: projectImages.imageII,
    href: "https://brunoarizio.com",
  },
  {
    name: "Korty Eniola",
    image: projectImages.imageIII,
    href: "https://korty.ibrahimraimi.com",
  },
  {
    name: "The Fountain of Elixir",
    image: projectImages.imageIV,
    href: "https://thefountainofelixir.com",
  },
  {
    name: "Musngr",
    image: projectImages.imageV,
    href: "https://musngr.studio21.studio",
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: testimonialImages.image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: testimonialImages.image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: testimonialImages.image3,
    imagePositionY: 0.55,
  },
];

// FAQs
export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];
