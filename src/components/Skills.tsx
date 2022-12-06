import Cards from './Cards';

const Skills = () => {
  return (
    <section className="container space-y-8 md:space-y-16">
      <div className="space-y-4 px-29 text-center md:space-y-7">
        <h1 className="text-black">Design solutions made easy</h1>
        <p className="text-gray">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <Cards />
    </section>
  );
};

export default Skills;
