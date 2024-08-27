import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div
      className="carousel-item"
      style={{
        backgroundImage: item.backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="carousel-content">
        <div className="carousel-h">{item.title}</div>
        <div className="carousel-item-text">{item.description}</div>
      </div>
    </div>
  );
};
