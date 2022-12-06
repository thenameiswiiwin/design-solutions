import Amy from '../assets/images/amy.png';
import Button from './Button';

const Bio = () => {
  return (
    <section className="grid grid-rows-1 place-items-center gap-8 px-4 md:grid-cols-2 md:gap-[69px]">
      <img src={Amy} alt="Amy" className="md:h-364 md:mr-28 md:w-364" />
      <div className="space-y-6 text-center md:pr-6 md:text-start">
        <h2 className="text-black">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="text-gray">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button styles="btn-secondary" />
      </div>
    </section>
  );
};

export default Bio;
