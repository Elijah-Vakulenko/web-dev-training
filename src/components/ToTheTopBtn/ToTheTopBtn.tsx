import React, { useState, useEffect } from 'react';
import { LuArrowBigUpDash } from "react-icons/lu";
import clsx from 'clsx';
import s from './ToTheTopBtn.module.css';
import throttle from 'lodash.throttle';

const ToTheTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const breakpoint = 500;

  const handleScroll = () => {
    const currentPageYOffset = window.pageYOffset;
    setIsVisible(currentPageYOffset > breakpoint);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 250);
    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <button
      className={clsx(s.tothetop, { [s.isHidden]: !isVisible, [s.fadeinup]: isVisible })}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <LuArrowBigUpDash className={s.arrow} />

    </button>
  );
};

export default ToTheTopBtn;
