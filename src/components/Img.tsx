const Img = ({
  claz,
  className,
  src,
}: {
  className?: string;
  src: string;
  claz?: string;
}) => {
  return (
    <div
      className={`${className} w-full md:w-[36rem] xl:w-[43rem] 2xl:w-[51rem] h-[12rem] mt-[7rem] md:mt-[5rem] flex overflow-x-hidden`}
    >
      <img src={src} alt="img" className={`${claz} w-full h-auto object-contain`} />
    </div>
  );
};

export default Img;

// bg-[#C4DEFD]
