import React from 'react'
import HomeComp1 from '../components/Home/HomeComp1';
import HomeComp2 from '../components/Home/HomeComp2';
import StatsBannerComp3 from '../components/Home/StatsBannerComp3';
import GalleryComp4 from '../components/Home/GalleryComp4';
import Footer from '../components/HeaderFooter/FooterInfo';


const HomePage = () => {
  return (
    <>
      <HomeComp1/>
      <HomeComp2/>
      <StatsBannerComp3/>
      <GalleryComp4/>
      <Footer/>
    </>
  )
}

export default HomePage