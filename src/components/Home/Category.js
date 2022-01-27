import React from 'react';
import catImg from '../../images/cetagory_image/Home_Decoration.png'

function Category() {
  return (
    <section class="product-category">
    <div class="container">
      <div class="section-title"><h3>Category</h3></div>
      <div class="row">
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Home Decoration" /></a>
                  <h4><a href="#">Home Decoration</a></h4>
              </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Wood Craft" /></a>
                  <h4><a href="#">Wood Craft</a></h4>
              </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Bamboo Furniture" /></a>
                  <h4><a href="#">Bamboo Furniture</a></h4>
              </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Nakshi Kantha" /></a>
                  <h4><a href="#">Nakshi Kantha</a></h4>
              </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Embroidery" /></a>
                  <h4><a href="#">Embroidery</a></h4>
              </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-2">
              <div class="product-category-item">
                  <a href="#"><img src={catImg} alt="Paper Art" /></a>
                  <h4><a href="#">Paper Art</a></h4>
              </div>
          </div>
      </div>
        <div class="row">
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Jute Craft" /></a>
                    <h4><a href="#">Jute Craft</a></h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Mosaic" /></a>
                    <h4><a href="#">Mosaic</a></h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Jewellery" /></a>
                    <h4><a href="#">Jewellery</a></h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Lamp" /></a>
                    <h4><a href="#">Lamp</a></h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Mat" /></a>
                    <h4><a href="#">Mat</a></h4>
                </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2">
                <div class="product-category-item">
                    <a href="#"><img src={catImg} alt="Glass Handicraft" /></a>
                    <h4><a href="#">Glass Handicraft</a></h4>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
}

export default Category;
