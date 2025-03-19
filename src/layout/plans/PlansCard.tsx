import React from 'react';
import Button from '../../components/Button';

// Plans array (keep this outside the component as is)
const Plans = [
  {
    title: 'Personal',
    price: '$11.99',
    subtitle: 'Keep home and family on track',
    list: [
      { text: 'Sync unlimited devices' },
      { text: '10 GB monthly uploads' },
      { text: '200 MB max. note size' },
      { text: 'Customize Home dashboard and access extra widgets' },
      { text: 'Connect primary Google Calendar account' },
      { text: 'Add due dates, reminders, and notifications to your tasks' },
    ],
  },
  {
    title: 'Free',
    price: '$0',
    subtitle: 'Capture ideas and find them quickly',
    list: [
      { text: 'Sync unlimited devices' },
      { text: '10 GB monthly uploads' },
      { text: '200 MB max. note size' },
      { text: 'Customize Home dashboard and access extra widgets' },
      { text: 'Connect primary Google Calendar account' },
      { text: 'Add due dates, reminders, and notifications to your tasks' },
    ],
  },
  {
    title: 'Organization',
    price: '$49.99',
    subtitle: 'Keep team Organized in a tracked workflow',
    list: [
      { text: 'Sync unlimited devices' },
      { text: '10 GB monthly uploads' },
      { text: '200 MB max. note size' },
      { text: 'Customize Home dashboard and access extra widgets' },
      { text: 'Connect primary Google Calendar account' },
      { text: 'Add due dates, reminders, and notifications to your tasks' },
    ],
  },
];

// Interface for props
interface IPlansCard {
  personal?: boolean;
  free?: boolean;
  organization?: boolean;
}

const PlansCard: React.FC<IPlansCard> = ({ personal, free, organization }) => {
  // Determine which plan to display
  let plan;

  if (personal) {
    plan = Plans[0];
  } else if (free) {
    plan = Plans[1];
  } else if (organization) {
    plan = Plans[2];
  } else {
    // If none is selected, don't render anything or show a fallback
    return null;
  }

  return (
    <div className="bg-myBlue text-myWhite w-full p-[1rem] rounded-lg flex flex-col gap-[1rem]">
      <p className="text-[24px]">{plan.title}</p>
      <h3 className="text-[32px]">{plan.price}</h3>
      <p>{plan.subtitle}</p>

      <ul className="flex flex-col gap-[1rem]">
        {plan.list.map((item, index) => (
          <li className="flex items-center gap-[2rem]" key={index}>
            <div className="w-[20px] min-w-[20px]">
              <img src="/assets/svg/checkItem.svg" alt="check" />
            </div>
            <p className="text-faintBlueText">{item.text}</p>
          </li>
        ))}
      </ul>

      <Button
        text="Get Started"
        className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
      />
    </div>
  );
};

export default PlansCard;
