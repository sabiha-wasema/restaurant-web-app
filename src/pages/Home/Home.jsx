import React from "react";
import HeroSection from "./HeroSection";
import MealCard from "../../components/MealCard/MealCard";
import MealList from "../../components/MealList/MealList";

const Home = ({ meals }) => {
  return (
    <div>
      <HeroSection />
      <MealList meals={meals} />
    </div>
  );
};

export default Home;
