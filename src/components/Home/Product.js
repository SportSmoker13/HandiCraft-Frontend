import React from 'react';
import newI from '../../images/new-product-ribbon.png'
import prod from '../../images/products/product_01.png'

function Product() {
  return (
    <div class="col-sm-6 col-md-6 col-lg-3">
    <div class="product-item">
        <div class="product-image">
            <div class="new"><img src={newI} alt="New" /></div>
            <img class="img-fluid" src={prod} alt="Product 1" />
            <a href="product-details.html" class="buy-now animate__flipInX">Buy Now</a>
        </div>
        <div class="product-info">
            <h4 class="product-name"><a href="product-details.html">Globe Electric Wooden lamp - Swing Arm Multi-Joint Desk Lamp</a></h4>
            <h5 class="brand">Brand</h5>
            <div class="row">
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                    <div class="discount-price">$32.00</div>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                    <div class="sale-price">$25.60</div>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="off-percent">30% Off</div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Product;
