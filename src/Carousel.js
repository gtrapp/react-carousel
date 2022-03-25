import React, { useState, useEffect } from "react";
import { SlideContent } from "./SlideContent";

const Carousel = ({ delay, children }) => {
  const [current, setCurrent] = useState(0);
  
  const length = children.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(
        (current) => (current === length - 1 ? 0 : current + 1)
      );
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(children) || children.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      {SlideContent.map((slide, index) => {
        return (
          <div
            className={index === current ? "carousel active" : "carousel"}
            key={index}
          >
            {index === current && <span>{slide}</span>}
          </div>
        );
      })}
      
      <div className={children.length < 2 ? "buttons hide" : "buttons"}>
        <button className="button-previous" onClick={prevSlide}>
          Previous
        </button>
        <button className="button-next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
