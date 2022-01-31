import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import BoxBanner from "./BoxBanner";
import Category from "./Category";
import HomeBanner from "./HomeBanner";
import PopularProduct from "./PopularProduct";
import ProductInfo from "./ProductInfo";

import Slider from "./Slider";
import SpecialEvent from "./SpecialEvent";
import Specials from "./Specials";

function Home() {
  const [logStatus, setLogStatus] = useState();

  return (
    
     <div>
       <Slider />
       <Category />
       <BoxBanner />
       <Specials />
       <SpecialEvent />
       <PopularProduct />
       <HomeBanner />
       <ProductInfo />
     </div>
  );
}

export default Home;
