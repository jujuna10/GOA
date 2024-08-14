// 11. **Image Carousel**: Create a simple image carousel that displays one image at a time with "Next" and "Previous" buttons to change the image.




import React, { useState } from "react";

function Carousel() {
  const [source, setSource] = useState(0);
  const images = [
    "./src/components/carousel/src/3n8tRry6fYg7sNyhFDPQwR-1200-80.jpg",
    "./src/components/carousel/src/20230722-817a8337-003rp-mei-xiang-web.png",
    "./src/components/carousel/src/Giant-panda-cub-branch.webp",
    "./src/components/carousel/src/Grosser_Panda.JPG",
    "./src/components/carousel/src/NVA-panda.jpg"
  ]

  const handleNext = () => {
    setSource((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
  }

  const handlePrevious = () => {
    setSource((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
  }

  return (
    <div>
      <img src={images[source]} alt="carousel" />
      <button onClick={handleNext}>next</button>
      <button onClick={handlePrevious}>previous</button>
    </div>
  )
}

export default Carousel;





