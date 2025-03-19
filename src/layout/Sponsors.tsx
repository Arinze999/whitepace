import Span from '../components/Span';

const Sponsors = () => {
  return (
    <div className="pt-[4rem] lg:pt-[6rem] h-fit pb-[5rem]">
      <img src="assets/svg/contourmobile.svg" alt="cont" className="absolute" />
      <div className="default-margin">
        <div className="flex justify-center items-center flex-col gap-[4rem]">
          <div className="flex flex-col gap-5 justify-center lg:items-start items-center h-full">
            <h1 className="text-[46px] md:text-[60px] font-[700] text-center">
              Our <Span text="Sponsors" />
            </h1>
          </div>
          <ul className='w-full max-w-[1482px] flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-[4rem]'>
            <li className='w-[3rem]'><img src="/assets/imgs/apple.png" alt="apple" className='w-full h-auto contain'/></li>
            <li className='w-[15rem]'><img src="/assets/imgs/microsoft.png" alt="apple" /></li>
            <li className='w-[11rem]'><img src="/assets/imgs/slack.png" alt="apple" /></li>
            <li className='w-[8rem]'><img src="/assets/imgs/google.png" alt="apple" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
