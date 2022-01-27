import React from 'react';
import '../../css/animate.min.css'
import '../../css/boxicons.min.css'
import '../../css/owl.carousel.min.css'
import '../../css/bootstrap.min.css'
import '../../css/stylef700.css?v=1.0.1'
import '../../css/responsivef700.css?v=1.0.1'
import slider1 from "../../images/slider-image-3.png";

function Slider() {
  return (
      <div>
           <section className="home-slider owl-carousel owl-theme">
        <div className="item">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="slider-caption-text">
                  <h4 className="animated">Limited Edition</h4>
                  <h2 className="animated">
                    Scadinavian Collection For Your Home Decoration Just{" "}
                    <span>$199</span>
                  </h2>
                  <a className="shop-now animated" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slider-image">
                  <img className="img-fluid" src={slider1} alt="Slider Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="slider-caption-text">
                  <h4 className="animated">Limited Edition 2</h4>
                  <h2 className="animated">
                    Scadinavian Collection For Your Home Decoration Just{" "}
                    <span>$500</span>
                  </h2>
                  <a className="shop-now animated" href="#">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="slider-image">
                  <img className="img-fluid" src={slider1} alt="Slider Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Slider;
