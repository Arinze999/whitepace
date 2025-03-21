import Button from '../components/Button';
import Img from '../components/Img';

const Hero = () => {
  return (
    <div className="h-fit pb-[5rem] lg:pb-[0] bg-myBlue text-myWhite">
      <div className="default-margin">
        {/* big web */}
        <div className="w-full h-full hidden 2xl:block absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavewebbig.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* web */}
        <div className="w-full h-full hidden xl:block 2xl:hidden absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/waveweb.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* small web */}
        <div className="w-full h-full hidden lg:block xl:hidden absolute top-[-2.25rem] left-0 opacity-30">
          <img
            src="/assets/svg/wavewebsmall.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* tablet */}
        <div className="w-full h-full hidden md:block mlg:top-[8.5rem] lg:hidden absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavetablet.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        {/* mobile */}
        <div className="w-full auto md:hidden block absolute top-0 left-0 opacity-30">
          <img
            src="/assets/svg/wavemobile.svg"
            alt="wavylines"
            className="w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between lg:items-center 2xl:place-items-center lg:gap-[1rem]">
          <div className="flex flex-col gap-5 justify-center lg:items-start items-center h-screen">
            <h1 className="text-[52px] md:text-[60px] font-[900] text-center lg:text-left">
              Get More Done with whitepace
            </h1>
            <p className="text-center lg:text-left text-xl font-[300] leading-loose mb-[5rem] md:mb-[3rem]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button
              text="Try Taskey Free"
              className="bg-faintBlue text-myWhite h-[5rem] w-[17rem]"
              icon
            />
          </div>
          <div className="w-full lg:flex justify-center items-center hidden">
            <Img
              src="/assets/imgs/herowork.webp"
              className="xl:h-[28.5rem] 2xl:h-[34rem] lg:h-[27rem] md:h-[23rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
