import Amy from '../assets/images/amy.png';

const Bio = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <img src={Amy} alt="Amy" />
      <div className="space-y-6 text-center">
        <h2 className="text-black">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <button type="button" className="btn-secondary">
          Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Bio;
