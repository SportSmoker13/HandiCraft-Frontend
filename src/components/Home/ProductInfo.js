import React from 'react';
import ProductDetail from './ProductDetail';

function ProductInfo() {
  return (
    <section class="product-info">
    <div class="container">
        <div class="section-title"><h3>Product Info</h3></div>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-xl-3">
                <div class="product-info-title"><h4>Featured Products</h4></div>
                <ProductDetail />
                <ProductDetail />

                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                
            </div>
        </div>
    </div>
</section>
  );
}

export default ProductInfo;
