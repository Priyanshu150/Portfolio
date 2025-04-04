import { Blog, Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Resume />
      <Skill />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
};