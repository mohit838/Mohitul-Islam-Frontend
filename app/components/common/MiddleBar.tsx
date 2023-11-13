export const MiddleBar = () => {
  return (
    <div className="relative w-[2px] h-28 bg-black">
      <div className="absolute w-[10px] h-[10px] bg-black top-0 left-0 translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="absolute w-[10px] h-[10px] bg-black -bottom-3 left-0 translate-x-[-50%] translate-y-[-50%]"></div>
    </div>
  );
};
