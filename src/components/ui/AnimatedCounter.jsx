import React from 'react';
import CountUp from 'react-countup';

export const AnimatedCounter = ({ end, duration = 2.5, suffix = '', prefix = '' }) => {
  return (
    <CountUp
      end={end}
      duration={duration}
      suffix={suffix}
      prefix={prefix}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} />
      )}
    </CountUp>
  );
};
