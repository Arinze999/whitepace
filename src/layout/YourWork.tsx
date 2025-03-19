import Span from '../components/Span';
import Button from '../components/Button';

const YourWork = () => {
  return (
    <div className="pt-[4rem] lg:pt-[6rem] h-fit lg:pb-[5rem] pb-[5rem] bg-myBlue text-myWhite z-[-2] relative">
      <img
        src="/assets/svg/contourweb.svg"
        alt="cont"
        className="absolute top-[4%] left-[-30%] h-full w-full cover hidden md:block"
      />
      <div className="default-margin">
        <div className="flex  flex-col lg:justify-between lg:items-center lg:gap-[1rem]">
          <div className="flex flex-col lg:justify-center lg:items-center gap-5 lg:gap-1 h-full">
            <h1 className="text-[46px] md:text-[60px] lg:text-center font-[700] flex flex-col lg:flex-row lg:gap-[1rem]">
              Work, everywhere
              <Span
                blue
                text="you are"
                className="w-[80%] md:w-[30%] lg:w-[90%] bottom-[-0.4rem] md:bottom-0 left-0"
              />
            </h1>
            <p className="text-xl font-[400] lg:text-center leading-loose mb-[2rem] md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem] max-w-[700px] lg:max-w-[900px]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
            <Button
              text="Try Taskey"
              className="bg-faintBlue text-myWhite h-[4rem] w-[12rem]"
              icon
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourWork;
