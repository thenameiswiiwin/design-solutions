import Nav from './Nav';
import Skills from './Skills';
import Bio from './Bio';
import Work from './Work';

const App = () => {
  return (
    <div className="container space-y-8 py-4 md:py-8">
      <header>
        <Nav />
      </header>
      <main className="space-y-25">
        <Skills />
        <Bio />
        <Work />
        <section className="space-y-6 rounded-xl bg-black px-6 py-49 text-center">
          <h2>Book a call with me</h2>
          <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
          <button type="button" className="btn-secondary">
            Free Consultation
          </button>
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default App;
