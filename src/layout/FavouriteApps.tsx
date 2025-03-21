import Button from '../components/Button';
import Img from '../components/Img';

const FavouriteApps = () => {
  return (
    <div className="h-fit pb-[3rem] pt-[3rem] bg-myBlue text-myWhite relative overflow-hidden">
      <div className="default-margin">
        {/* big web */}
        <div className="w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-50">
          <img
            src="/assets/imgs/4.png"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* web */}
        <div className="w-full h-full hidden xl:block 2xl:hidden absolute top-0 left-0 opacity-50">
          <img
            src="/assets/imgs/3.png"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* small web */}
        <div className="w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-50">
          <img
            src="/assets/imgs/2.png"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* tablet */}
        <div className="w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 bottom-0 left-0 opacity-50">
          <img
            src="/assets/imgs/1.png"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* mobile */}
        <div className="w-full auto md:hidden block absolute top-0 bottom-[-14rem] left-0 opacity-60">
          <img
            src="/assets/imgs/1.png"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-center lg:items-center  gap-[5rem] lg:gap-[1rem]">
          <div className="w-full flex justify-center items-center">
            <Img
              src="/assets/imgs/favourite.png"
              className="mt-[4rem] xl:h-[28rem] 2xl:h-[34rem] lg:h-[20rem] md:h-[23rem] justify-center items-center"
              claz=" min-w-[22rem] max-w-[40rem]"
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 justify-center lg:items-start items-center">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center lg:text-left">
              Work with your favourite Apps using whitepace
            </h1>
            <p className="text-center lg:text-left text-xl font-[300] leading-loose mb-[3rem] md:mb-[3rem]">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
            <Button
              text="Read More"
              className="bg-faintBlue text-myWhite h-[5rem] w-[17rem]"
              icon
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteApps;
