import graphicDesign from '../assets/images/graphic-design.png';
import uiUX from '../assets/images/ui-ux.png';
import apps from '../assets/images/apps.png';
import illustrations from '../assets/images/illustrations.png';
import photography from '../assets/images/photography.png';
import motionGraphics from '../assets/images/motion-graphics.png';

const CATEGORIES = [
  {
    img: graphicDesign,
    title: 'Graphic Design',
    style: 'col-span-2 bg-indigo space-y-23',
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
    style: 'col-span-2 bg-teal space-y-10',
  },
  {
    img: motionGraphics,
    title: 'Motion Graphics',
    style: 'col-span-2 bg-violet space-y-10',
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {CATEGORIES.map((category) => (
        <div
          key={category.title}
          className={`flex flex-col rounded-lg p-6 ${category.style}`}
        >
          <img src={category.img} alt={category.title} className="self-end" />
          <p className="text-h3 font-bold">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
