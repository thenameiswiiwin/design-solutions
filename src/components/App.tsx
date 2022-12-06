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
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default App;
