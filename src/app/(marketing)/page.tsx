import { Fragment } from "react";
import { Hero, SiteHeader } from "@/sections";

export default function Home() {
  return (
    <Fragment>
      <SiteHeader />
      <Hero />
    </Fragment>
  );
}
