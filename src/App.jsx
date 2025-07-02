import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import MealList from "./components/MealList/MealList";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMeals = async (searchQuery) => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
        setError("No meals found!");
      }
    } catch (error) {
      console.error("Failed to fetch meals", error);
      setError("Something went wrong while fetching meals.");
    }
    finally {
    setLoading(false);
  }
  };

  const getRandomMeal = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
        setError("Could not get a random meal.");
      }
    } catch (error) {
      console.error("Failed to fetch random meal", error);
      setError("Something went wrong while fetching a random meal.");
    }
    finally {
    setLoading(false);
  }
  };

  useEffect(() => {
    searchMeals("chicken");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchMeals(query.trim());
      setQuery("");
    }
  };

  return (
    <>
      <Navbar
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        getRandomMeal={getRandomMeal}
      />
      <Routes>
        <Route path="/" element={<Home meals={meals} loading={loading} error={error} />} />
        <Route path="/menu" element={<MealList meals={meals} error={error} />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
