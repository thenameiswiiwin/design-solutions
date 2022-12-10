type SlidesProps = {
  images: { url: string }[];
  current: number;
};

const Slides = ({ images, current }: SlidesProps) => {
  return (
    <div className="flex max-w-full snap-x snap-mandatory gap-4 overflow-x-hidden">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={index === current ? 'flex-none snap-center' : 'flex-none'}
        >
          <img
            src={image.url}
            alt={image.url}
            className="h-180 w-270 rounded-xl md:h-360 md:w-540"
          />
        </div>
      ))}
    </div>
  );
};

export default Slides;
