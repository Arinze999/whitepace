import TopSection from './sections/TopSection';
import BottomSection from './sections/BottomSection';

const Footer = () => {
  return (
    <div className="pt-[4rem] lg:pt-[2rem] h-fit lg:pb-[2rem] pb-[5rem] bg-myBlue text-myWhite z-[-2] relative">
      <div className="default-margin flex flex-col gap-30 lg:gap-15">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default Footer;
