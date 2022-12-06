import Logo from './Logo';
import Button from './Button';
import Categories from './Categories';

const App = () => {
  return (
    <div className="container space-y-8 py-4 md:py-8">
      <header className="flex items-center justify-between">
        <Logo />
        <Button styles="btn-primary" />
      </header>
      <main>
        <section className="space-y-8">
          <div className="space-y-4 px-29 text-center">
            <h1 className="text-black">Design solutions made easy</h1>
            <p>
              With over ten years of experience in various design disciplines,
              I’m your one-stop shop for your design needs.
            </p>
          </div>
          <Categories />
        </section>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};

export default App;
