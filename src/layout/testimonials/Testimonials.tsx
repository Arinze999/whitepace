import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialsCard';
import Span from '../../components/Span';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    <TestimonialCard key={0} free />,
    <TestimonialCard key={1} personal />,
    <TestimonialCard key={2} organization />,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, [cards.length]);

  const getSlideStyles = (index: any) => {
    const totalSlides = cards.length;

    if (index === currentSlide) {
      return 'z-30 scale-100 opacity-100';
    }

    if (
      index === (currentSlide === 0 ? totalSlides - 1 : currentSlide - 1) ||
      index === (currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
    ) {
      return 'z-20 scale-70 opacity-40';
    }

    return 'z-10 scale-75 opacity-30';
  };

  return (
    <div className="pt-[3rem] lg:pt-[3em] h-fit lg:pb-[0] pb-[5rem]">
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:justify-between xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center flex flex-col">
              What Our
              <Span text="Clients say" className="w-[60%]" />
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-5xl mx-auto relative h-[40rem] flex items-center justify-center">
              {/* Slides Wrapper */}
              <div className="relative w-full h-full flex justify-center items-center overflow-clip lg:overflow-visible">
                {cards.map((card, index) => {
                  const positionOffset =
                    index === currentSlide
                      ? 'translate-x-0'
                      : index ===
                        (currentSlide === 0
                          ? cards.length - 1
                          : currentSlide - 1)
                      ? '-translate-x-1/2'
                      : index ===
                        (currentSlide === cards.length - 1
                          ? 0
                          : currentSlide + 1)
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

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 w-6 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-myBlue scale-125'
                        : 'bg-[#4F9CF9]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
