import React from "react";
import Carousel from "nuka-carousel";
import Decorators from "./decorators";

const nukaCarousel = () => (
  <Carousel wrapAround={true} autoplay={true} autoplayInterval={10000} decorators={Decorators}>
    <div className="project-carousel-slide">
      <h1>Panobook</h1>
      <h2>A Notebook for Your Desk</h2>
      <a href="#/projects/1" className="view-proj-button"><button>View project</button></a>
      <img className="img-car" src="http://s3.amazonaws.com/crankstarter-dev/projects/project_imgs/000/000/001/original/computer-2242266_1280.jpg?1498781587" />
    </div>

    <div className="project-carousel-slide">
      <h1>Tiger + Man's Debut Music Videos.</h1>
      <h2>Lead your prehistoric Tribe to victory through discovery, achievements and civilization</h2>
      <a href="#/projects/4"><button>View project</button></a>
      <img className="img-car" src="/assets/tiger-c5b77d71a70703eb3fa10aa7473bdd74fe38a8d3836edef61c95ef251737bd10.jpg" />
    </div>

    <div className="project-carousel-slide">
      <h1>Hedges n highways by Official Godson.</h1>
      <h2>A hip hop Music album about positive messages</h2>
      <a href="#/projects/8" className="view-proj-button"><button>View project</button></a>
      <img class="img" src="http://s3.amazonaws.com/crankstarter-dev/projects/project_imgs/000/000/008/original/3001816_1422037466.9019.jpg?1498781597" />
    </div>

  </Carousel>
);

 export default nukaCarousel;
