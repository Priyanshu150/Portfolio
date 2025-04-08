import { Contact, Hero, Portfolio, Resume, Skill } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Skill />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
};