import React from 'react';

// Plans array (keep this outside the component as is)
const Testimonials = [
  {
    name: 'Oberon Shaw, MCH',
    message:
      'Taskkey is designed as a collaboration tool for businesses that is a full project management solution.',
    src: '/assets/imgs/avatar1.png',
    occupation: 'Head of Talent Acquisition, North America',
  },
  {
    name: 'Oberon Shaw, MCH',
    message:
      'Taskkey is designed as a collaboration tool for businesses that is a full project management solution.',
    src: '/assets/imgs/avatar2.png',
    occupation: 'Head of Talent Acquisition, North America',
  },
  {
    name: 'Oberon Shaw, MCH',
    message:
      'Taskkey is designed as a collaboration tool for businesses that is a full project management solution.',
    src: '/assets/imgs/avatar3.png',
    occupation: 'Head of Talent Acquisition, North America',
  },
];

// Interface for props
interface IPlansCard {
  personal?: boolean;
  free?: boolean;
  organization?: boolean;
  className?: string;
}

const TestimonialCard: React.FC<IPlansCard> = ({
  personal,
  free,
  organization,
  className,
}) => {
  // Determine which plan to display
  let test;

  if (personal) {
    test = Testimonials[0];
  } else if (free) {
    test = Testimonials[1];
  } else if (organization) {
    test = Testimonials[2];
  } else {
    // If none is selected, don't render anything or show a fallback
    return null;
  }

  return (
    <div
      className={`bg-myWhite w-full h-[458px] shadow-2xl p-[1rem] rounded-lg flex flex-col gap-[1rem] relative ${className}`}
    >
      <div className="absolute top-[1rem] left-[1rem]">
        <img src="/assets/imgs/quote.png" alt="" />
      </div>
      <div className="h-[50%] w-full border-b-1 border-gray-300">
        <p className="text-[18px] py-[4rem]">{test.message}</p>
      </div>
      <div className="h-[50%] w-full flex flex-col gap-4 justify-around">
        <div className="flex justify-center items-center w-[50px] h-[50px] overflow-hidden rounded-full">
          <img src={test.src} alt="user.jpg" />
        </div>
        <p>{test.name}</p>
        <p>{test.occupation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
