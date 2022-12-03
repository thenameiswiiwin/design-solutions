import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  CubeIcon,
} from '@heroicons/react/24/solid';

const App = () => {
  return (
    <div className="space-y-6">
      <div className="logo">
        <CubeIcon className="h-8 w-8" />
      </div>
      <div>
        <h1>Heading (L)</h1>
        <h2>Heading (M)</h2>
        <h3>Heading (S)</h3>
        <p>
          Lorem officia inventore nostrum possimus suscipit Illo beatae velit
          corporis itaque dolorum! Voluptate mollitia ipsam vitae
        </p>
      </div>
      <div className="flex space-x-6">
        <button className="btn-primary">Free Consultation</button>
        <button className="btn-secondary">Free Consultation</button>
      </div>
      <div className="flex">
        <button className="btn-arrow text-black">
          <ArrowLeftCircleIcon />
        </button>
        <button className="btn-arrow text-black">
          <ArrowRightCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default App;
