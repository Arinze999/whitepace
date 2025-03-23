import Button from '../../../components/Button';

const TopSection = () => {
  return (
    <div className="flex flex-col gap-10 lg:justify-center lg:items-center lg:gap-5">
      <h1 className="text-[46px] md:text-[60px] font-[700] text-left gap-3 lg:text-center">
        Try Whitepace today
      </h1>
      <p className="text-left lg:text-center text-xl font-[400] leading-loose md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem]">
        Get started for free. <br className="" /> Add your whole team as your{' '}
        <br className="" /> team needs grow.
      </p>
      <Button
        text="Try Taskey Free"
        className="bg-faintBlue text-myWhite h-[4rem] w-[17rem]"
        icon
      />
      <p className="text-left lg:text-center text-xl font-[400] leading-loose md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem]">
        On a big team? Contact sales
      </p>{' '}
      <ul className="w-full max-w-[400px] flex  lg:justify-between gap-[4rem]">
        <li className="w-[3rem]">
          <img
            src="/assets/imgs/applew.png"
            alt="apple"
            className="w-full h-auto contain"
          />
        </li>
        <li className="w-[3rem]">
          <img src="/assets/imgs/windows.png" alt="apple" />
        </li>
        <li className="w-[3rem]">
          <img src="/assets/imgs/android.png" alt="apple" />
        </li>
      </ul>
    </div>
  );
};

export default TopSection;
