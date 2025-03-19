import { useState } from 'react';
import PlansCard from './PlansCard';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon';

const Plans = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    <PlansCard key={0} free />,
    <PlansCard key={1} personal />,
    <PlansCard key={2} organization />,
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getSlideStyles = (index: any) => {
    const totalSlides = cards.length;

    if (index === currentSlide) {
      return 'z-30 scale-100 opacity-100';
    }

    if (
      index === (currentSlide === 0 ? totalSlides - 1 : currentSlide - 1) || // previous
      index === (currentSlide === totalSlides - 1 ? 0 : currentSlide + 1) // next
    ) {
      return 'z-20 scale-70 opacity-40';
    }

    return 'z-10 scale-75 opacity-30';
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative h-[40rem] flex items-center justify-center">
      {/* Slides Wrapper */}
      <div className="relative w-full h-full flex justify-center items-center overflow-clip lg:overflow-visible">
        {cards.map((card, index) => {
          const positionOffset =
            index === currentSlide
              ? 'translate-x-0'
              : index ===
                (currentSlide === 0 ? cards.length - 1 : currentSlide - 1)
              ? '-translate-x-1/2'
              : index ===
                (currentSlide === cards.length - 1 ? 0 : currentSlide + 1)
              ? 'translate-x-1/2'
              : 'translate-x-full';

          return (
            <div
              key={index}
              className={`absolute w-full max-w-[30rem] transition-all duration-500 ease-in-out ${positionOffset} ${getSlideStyles(
                index
              )} w-2/3`}
            >
              {card}
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-1/2 left-[-15px] transform -translate-y-1/2 bg-blue-300 opacity-40 hover:opacity-100 text-gray-700 rounded-full shadow p-2 hover:bg-gray-100 z-40"
      >
        <ChevronLeftIcon />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-1/2 right-[-15px] transform -translate-y-1/2 bg-blue-300 opacity-40 hover:opacity-100 text-gray-700 rounded-full shadow p-2 hover:bg-gray-100 z-40"
      >
        <ChevronRightIcon />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-myBlue scale-125' : 'bg-[#4F9CF9]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
