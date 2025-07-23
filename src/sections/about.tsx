import { FC } from "react";

const About: FC = () => {
  return (
    <section className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">About Me</h2>

        <article className="mt-10 md:mt-16 lg:mt-20">
          <h3 className="text-4xl md:text-7xl lg:text-8xl lg:w-[100%]">
            With a passion for design and development, I take projects from
            ideation to launch, ensuring a seamless journey that leaves a
            lasting positive impact on the digital landscape and your business.
          </h3>
        </article>

        <article className="mt-10 md:mt-16 lg:mt-20">
          <p className="text-2xl md:text-3xl lg:text-4xl  md:w-[100%] lg:w-[50%] text-taupe">
            Creating great web experiences is my primary focus. <br />I ensure
            each project leaves users with a feel-good sensation through
            meticulous attention to detail and user-centric design principles.
          </p>
        </article>

        <article className="mt-5 md:mt-8 lg:mt-14">
          <p className="text-2xl md:text-3xl lg:text-4xl md:w-[100%] lg:w-[50%] text-taupe">
            When I'm not immersed in web development and design, you can find me
            building side projects, writing about tech and creativity, curating
            music playlists, or brainstorming ideas for the next fun activity to
            share with friends.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
