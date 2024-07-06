import React from 'react'
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProduct'
import LongBanner from '../components/LongBanner/LongBanner'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import Smallbanner from '../components/SmallBanner/SmallBanner'
import NewsLetter from "../components/NewsLetter/NewsLetter"

function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <FeaturedProducts/>
      <LongBanner/>
      <NewArrivals/>
      <Smallbanner/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home

