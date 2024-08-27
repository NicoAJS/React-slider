import React, { useState, useEffect } from "react";
import { CarouselItem } from "./CarouselItem";

// Import images
import bg1 from './Media/bg1.jpg';
import bg2 from './Media/bg2.jpg';
import bg3 from './Media/bg3.jpg';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Slide 1 Title",
      description: "Description for slide 1. This is where you can describe the content of slide 1.",
      backgroundImage: `url(${bg1})`,
    },
    {
      title: "Slide 2 Title",
      description: "Description for slide 2. This is where you can describe the content of slide 2.",
      backgroundImage: `url(${bg2})`,
    },
    {
      title: "Slide 3 Title",
      description: "Description for slide 3. This is where you can describe the content of slide 3.",
      backgroundImage: `url(${bg3})`,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1; // Loop to the last item if newIndex is negative
    } else if (newIndex >= items.length) {
      newIndex = 0; // Loop to the first item if newIndex exceeds the length
    }
    setActiveIndex(newIndex);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 10000); // 5000 milliseconds = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarouselItem item={item} key={index} />
        ))}
      </div>

      <div className="carousel-buttons">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>

        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>

      <div className="indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className="indicator-buttons"
            onClick={() => updateIndex(index)}
          >
            <span
              className={`material-symbols-outlined ${
                index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"
              }`}
            >
              radio_button_checked
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
