export const links = {
  instagram: "https://instagram.com/ibrahimraimi",
  twitter: "https://twitter.com/ibrahimraimi_",
  linkedin: "https://linkedin/in/ibrahimraimi",
  github: "https://github.com/ibrahimraimi",
  siteurl: "https://ibrahimraimi.com"
};

export const siteConfig = {
  name: "Ibrahim Raimi",
  description:
    "",
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