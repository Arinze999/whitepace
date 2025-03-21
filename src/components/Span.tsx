

const Span = ({
  text,
  // yellow1,
  blue,
  className,
}: {
  text: string;
  // yellow1?: boolean;
  blue?: boolean;
  className?: string;
}) => {
  return (
    <span className="relative">
      {text}
      {blue ? (
        <div
          className={`${className} absolute bottom-[-1.25rem] right-0 w-full z-[-1]`}
        >
          <img
            src="/assets/imgs/blue.png"
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div
          className={`${className} absolute bottom-[-1.25rem] right-0 w-full z-[-1]`}
        >
          <img
            src="/assets/imgs/yellow.png"
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </span>
  );
};

export default Span;
