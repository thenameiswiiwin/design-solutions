import { useState } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import Work1 from '../assets/images/work-1.png';
import Work2 from '../assets/images/work-2.png';
import Work3 from '../assets/images/work-3.png';

const IMAGES = [{ url: Work1 }, { url: Work2 }, { url: Work3 }];

const Work = () => {
  const [current, setCurrent] = useState(0);
  const { length } = IMAGES;

  const handlePrev = () => setCurrent(current === 0 ? length : current - 1);
  const handleNext = () => setCurrent(current === length ? 0 : current + 1);

  if (!Array.isArray(IMAGES) || IMAGES.length <= 0) return null;

  return (
    <section className="space-y-8">
      <h3 className="text-center text-black">My Work</h3>
      <div className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
        {IMAGES.map((image, index) => (
          <div
            key={image.url}
            className={
              index === current ? 'flex-none snap-center' : 'flex-none'
            }
          >
            <img
              src={image.url}
              alt={image.url}
              className="h-[180px] w-[270px] rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button type="button" onClick={handlePrev} className="btn-arrow">
          <ArrowLeftCircleIcon />
        </button>
        <button type="button" onClick={handleNext} className="btn-arrow">
          <ArrowRightCircleIcon />
        </button>
      </div>
    </section>
  );
};

export default Work;
