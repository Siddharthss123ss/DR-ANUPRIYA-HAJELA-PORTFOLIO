"use client";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  suffix?: string;
};

export default function Counter({
  end,
  suffix = "",
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          start={0}
          end={end}
          duration={3}
          separator=","
        >
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-5xl font-black text-white"
            />
          )}
        </CountUp>
      )}

      <span className="text-5xl font-black text-white">
        {suffix}
      </span>
    </div>
  );
}