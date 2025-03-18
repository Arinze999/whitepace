import Button from '../../components/Button';

const list = [
  {
    text: 'Sync unlimited devices',
  },
  {
    text: '10 GB monthly uploads',
  },
  {
    text: '200 MB max. note size',
  },
  {
    text: 'Customize Home dashboard and access extra widgets',
  },
  {
    text: 'Connect primary Google Calendar account',
  },
  {
    text: 'Add due dates, reminders, and notifications to your tasks',
  },
];

const PlansCard = () => {
  return (
    <div className="bg-myBlue text-myWhite w-full p-[1rem] rounded-lg flex flex-col gap-[1rem]">
      <p className="text-[24px]">Personal</p>
      <h3 className="text-[32px]">$11.2</h3>
      <p>Keep home and family on track</p>
      <ul className="flex flex-col gap-[1rem]">
        {list.map((item, index) => (
          <li className="flex items-center gap-[2rem]" key={index}>
            <div className="w-[20px] min-w-[20px]">
              <img src="/assets/svg/checkItem.svg" alt="" />
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
