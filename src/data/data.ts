import graphicDesign from '../assets/images/graphic-design.png';
import uiUX from '../assets/images/ui-ux.png';
import apps from '../assets/images/apps.png';
import illustrations from '../assets/images/illustrations.png';
import photography from '../assets/images/photography.png';
import motionGraphics from '../assets/images/motion-graphics.png';
import Work1 from '../assets/images/work-1.png';
import Work2 from '../assets/images/work-2.png';
import Work3 from '../assets/images/work-3.png';

const CATEGORIES = [
  {
    img: graphicDesign,
    title: 'Graphic Design',
    style: 'col-span-2 md:row-span-2 bg-indigo space-y-23',
  },
  { img: uiUX, title: 'UI/UX', style: 'bg-orange space-y-10' },
  { img: apps, title: 'Apps', style: 'bg-pink space-y-10' },
  {
    img: illustrations,
    title: 'Illustration',
    style: 'col-span-2 bg-red space-y-4',
  },
  {
    img: photography,
    title: 'Photography',
    style: 'col-span-2 xl:col-start-5 xl:row-start-1 bg-teal space-y-10',
  },
  {
    img: motionGraphics,
    title: 'Motion Graphics',
    style: 'col-span-2 bg-violet space-y-10',
  },
];

const IMAGES = [{ url: Work1 }, { url: Work2 }, { url: Work3 }];

export { CATEGORIES, IMAGES };
