import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const nukaCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={5000} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>Panobook</h1>
      <h2>A Notebook for Your Desk</h2>
      <a href="#/projects/1" className="view-proj-button"><button>View project</button></a>
      <img src="https://s3.amazonaws.com/crankstarter-dev/projects/project_imgs/000/000/001/original/computer-2242266_1280.jpg?1498781587" />
    </div>

    <div className="project-carousel-slide">
      <h1>Man's Debut Music Videos</h1>
      <h2>Lead your prehistoric Tribe to victory through discovery, achievements and civilization</h2>
      <a href="#/projects/4"><button>View project</button></a>
      <img src="http://t.wallpaperweb.org/wallpaper/nature/1920x1080/ps3_hq_image_3451920x1080.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>crankstarter Gold: VIDERE 35mm</h1>
      <h2>Put down your phone and reconnect</h2>
      <a href="#/projects/9" className="view-proj-button"><button>View project</button></a>
      <img src="https://s3.amazonaws.com/crankstarter-dev/projects/project_imgs/000/000/009/original/old-school-camera.jpg?1498830938" />
    </div>

  </Carousel>
);

 export default nukaCarousel;
