import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Events from "../components/Events/Events";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header  />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <Footer />
    </div>
  )
}

export default HomePage