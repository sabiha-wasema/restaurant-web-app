import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "./components/MealCard/MealCard";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setMeals(res.data.meals || []);
      } catch (error) {
        console.error("Failed to fetch meals", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<Home meals={meals} />}
        />
      </Routes>
    </>
  );
}

export default App;
