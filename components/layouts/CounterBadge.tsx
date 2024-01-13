"use client";
import CountUp from "react-countup";

const CounterBadge = ({
  contiainerStyles,
  icon,
  endCountNum,
  endCounterText,
  badgeText,
}: any) => {
  return (
    <div className={`badgeCard ${contiainerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp
            end={endCountNum}
            delay={1}
            duration={4}
          />
          {endCounterText}
        </div>
        <div className="dark:text-black">{badgeText}</div>
      </div>
    </div>
  );
};

export default CounterBadge;
