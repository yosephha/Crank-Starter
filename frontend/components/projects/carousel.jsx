import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const nukaCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
  </Carousel>
);

 export default nukaCarousel;
