import { CATEGORIES } from '../data/data';

type CategoryData = {
  img: string;
  title: string;
  style: string;
};

const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:grid-rows-2 xl:grid-cols-6">
      {CATEGORIES.map((category: CategoryData) => (
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

export default Cards;
