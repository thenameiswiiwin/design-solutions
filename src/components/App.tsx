import Nav from './Nav';
import Skills from './Skills';
import Bio from './Bio';
import Work from './Work';
import Contact from './Contact';

const App = () => {
  return (
    <div className="space-y-8 py-4 md:space-y-16 md:py-34 xl:space-y-66">
      <header>
        <Nav />
      </header>
      <main className="space-y-25 md:space-y-120 xl:space-y-136">
        <Skills />
        <Bio />
        <Work />
        <Contact />
      </main>
      <footer>
        <Nav />
      </footer>
    </div>
  );
};

export default App;
