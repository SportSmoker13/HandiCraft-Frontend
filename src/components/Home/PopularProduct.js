import React from 'react';
import Product from './Product';

function PopularProduct() {
  return (
    <section class="product-listing">
    <div class="container">
        <div class="section-title"><h3>Popular Product</h3></div>
        <div class="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
</section>
  );
}

export default PopularProduct;
