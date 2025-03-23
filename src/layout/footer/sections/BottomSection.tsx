import Button from '../../../components/Button';
import CompanyLogo from '../../../components/CompanyLogo';

const BottomSection = () => {
  return (
    <div className="flex relative flex-col lg:flex-row gap-10 lg:justify-between lg:items-start lg:gap-5 lg:pb-[8rem]">
      <div className="flex flex-col md:items-start justify-center md:justify-start lg:justify-center gap-5">
        <CompanyLogo imgClass="w-[46px]" textClass="text-[30px]" />
        <p className="text-center max-w-[600px] lg:max-w-[350px] md:text-left text-xl font-[400] leading-loose md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem]">
          whitepace was created for the new ways we live and work. We make
          beautyfully designed around the world
        </p>
      </div>

      <ul className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
        <h3 className="font-[800]">Product</h3>
        <li>Overview</li>
        <li>Pricing</li>
        <li>Customer stories</li>
      </ul>

      <ul className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
        <h3 className="font-[800]">Resources</h3>
        <li>Blog</li>
        <li>Guides & tutorials</li>
        <li>Help center</li>
      </ul>

      <ul className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
        <h3 className="font-[800]">Company</h3>
        <li>About us</li>
        <li>Careers</li>
        <li>Media kit</li>
      </ul>

      <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
        <h3 className="font-[800] text-xl ">Try it Today</h3>
        <p className="text-center max-w-[200px] md:text-left font-[400] leading-loose md:mb-[3rem] lg:mb-[0rem] xl:mb-[3rem]">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <Button
          text="Start Today"
          className="bg-faintBlue text-myWhite h-[3rem] w-[12rem]"
          icon
        />
      </div>

      <div className="lg:absolute bottom-0 w-full">
        <hr className="opacity-50 hidden lg:block mb-[2rem]" />
        <ul className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start gap-2 mb-[1rem]">
          <li className="flex items-center gap-2">
            <img src="/assets/imgs/globe2.png" alt="globe" />
            English
          </li>
          <li>Terms & Policy</li>
          <li>Security</li>
          <li>Status</li>
          <li>©2021 Whitepace LLC.</li>
        </ul>

        <hr className="opacity-50 lg:hidden" />

        <ul className="flex justify-center items-center md:justify-start lg:justify-center md:items-start gap-10 mt-[1rem]">
          <li>
            <img src="/assets/imgs/facebook.png" alt="fb" />
          </li>
          <li>
            <img src="/assets/imgs/twitter.png" alt="tweet" />
          </li>
          <li>
            <img src="/assets/imgs/linkedin.png" alt="linkedin" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomSection;
