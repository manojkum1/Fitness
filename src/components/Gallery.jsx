import React from "react";

const Gallery = () => {
  const data = [
    "./img1.webp",
    "./img2.jpg",
    "./img3.jpg",
    "./img4.jpg",
    "./img5.jpg",
    "./img6.jpg",
    "./img7.jpg",
    "./img8.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {data.slice(0, 3).map((ele, index) => (
            <img key={index} src={ele} alt="galleryimages" />
          ))}
        </div>
        <div>
          {data.slice(3, 6).map((ele, index) => (
            <img key={index} src={ele} alt="galleryimages" />
          ))}
        </div>
        <div>
          {data.slice(6, 9).map((ele, index) => (
            <img key={index} src={ele} alt="galleryimages" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
