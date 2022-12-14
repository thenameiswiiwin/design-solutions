import { useState } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import Slides from './Slides';
import SlideButton from './SlideButton';
import { IMAGES } from '../data/data';

const Work = () => {
  const [current, setCurrent] = useState(1);
  const { length } = IMAGES;

  const handlePrev = () => setCurrent(current === 1 ? length : current - 1);
  const handleNext = () => setCurrent(current === length ? 1 : current + 1);

  if (!Array.isArray(IMAGES) || length <= 0) return null;

  return (
    <section className="space-y-8 md:space-y-14">
      <h3 className="text-center text-black">My Work</h3>
      <Slides images={IMAGES} current={current} />
      <div className="flex justify-center gap-4">
        <SlideButton handleClick={handlePrev} icon={<ArrowLeftCircleIcon />} />
        <SlideButton handleClick={handleNext} icon={<ArrowRightCircleIcon />} />
      </div>
    </section>
  );
};

export default Work;
