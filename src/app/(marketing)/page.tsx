import { Fragment } from "react";

import {
  About,
  FAQs,
  Hero,
  Intro,
  Projects,
  SiteFooter,
  SiteHeader,
  Testimonials,
} from "@/sections";

export default function Home() {
  return (
    <Fragment>
      <SiteHeader />
      <Hero />
      <Intro />
      <Projects />
      <About />
      <Testimonials />
      <FAQs />
      <SiteFooter />
    </Fragment>
  );
}
