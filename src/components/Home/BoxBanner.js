import React from 'react';
import boxImg from '../../images/banner-05.png'

function BoxBanner() {
  return (
    <section class="box-banner">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="box-banner-area banner-bg-light-orange">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="box-banner-area-text">
                                <h5>Special Deal</h5>
                                <h3 class="product-name">Hand Made Wood Craft</h3>
                                <h5 class="animate__animated animate__pulse">Up To <span>60% Off</span></h5>
                                <a href="#" class="shop-now">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="box-banner-area-image">
                                <img class="img-fluid"  src={boxImg} alt="Banner Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="box-banner-area banner-bg-light-blue">
                    <div class="row">
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="box-banner-area-text">
                                <h5>Special Deal</h5>
                                <h3 class="product-name">Hand Made Wood Craft</h3>
                                <h5>Up To <span>50% Off</span></h5>
                                <a href="#" class="shop-now">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6">
                            <div class="box-banner-area-image">
                                <img class="img-fluid" src={boxImg} alt="Banner Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default BoxBanner;
