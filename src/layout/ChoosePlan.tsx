
import Span from '../components/Span';
import Plans from './plans/Plans';

const ChoosePlan = () => {
  return (
    <div className="pt-[rem] lg:pt-[3em] h-fit lg:pb-[0] pb-[5rem]">
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col lg:justify-between lg:items-start xl:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center flex flex-col">
              Choose Your
              <Span text="Plan" className='w-[60%]'/>
            </h1>
            <p className="text-center text-xl font-[400] leading-loose mb-[2rem] md:mb-[0rem]">
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
          <Plans/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
