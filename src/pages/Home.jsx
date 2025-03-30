import { Blog, Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Hero />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
};