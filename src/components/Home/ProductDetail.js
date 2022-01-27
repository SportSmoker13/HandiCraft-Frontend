import React from 'react';
import prod from  '../../images/products/product_01.png'

function ProductDetail() {
  return(
    <div class="product-info-item d-flex">
    <div class="product-info-item-image">
        <img class="img-fluid" src={prod} alt="Feature Product 1" />
    </div>
    <div class="product-info-item-content">
        <h3 class="product-title"><a href="#">Beijing Vase Ceramic Purple, Blue</a></h3>
        <div class="star-rating">
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star'></i>
            <i class='bx bxs-star-half'></i>
        </div>
        <div class="sale-price">$35.00</div>
    </div>
</div>
  );
}

export default ProductDetail;
