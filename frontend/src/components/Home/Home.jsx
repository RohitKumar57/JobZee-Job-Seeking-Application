import React, { useContext } from 'react'
import { Context } from '../../main'
import { Navigate } from 'react-router-dom'
import HeroSection from "./HeroSection"
import PopularCategories from "./PopularCategories"
import PopularCompanies from "./PopularCompanies"
import HowitWorks from './HowitWorks'


const Home = () => {

  const {isAuthorised} = useContext(Context)

  if(!isAuthorised){
    return <Navigate to = {"/login"}/>
  }
  return (
    <section className="homePage page">
      <HeroSection />
      <HowitWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
}

export default Home
