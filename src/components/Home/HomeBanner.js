import React from 'react';
import banner from '../../images/banner-02.png'

function HomeBanner() {
  return (
    <section class="banner">
    <div class="container">
        <div class="banner-area text-center">
            <div class="row">
                <div class="col-md-4 text-center">
                    <img src={banner} alt="Banner Image" />
                </div>
                <div class="col-md-5">
                    <div class="banner-content">
                        <h3><span>35%</span> Off</h3>
                        <h5>On All Furniture Items</h5>
                    </div>
                </div>
                <div class="col-md-3">
                    <a href="#" class="shop-now">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default HomeBanner;
