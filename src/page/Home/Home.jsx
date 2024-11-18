import React from "react";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";


const Home = () => {
  return (
    <div className="space-y-20 dark:text-gray-100">
      <Banner/>
      <Categories/>
    </div>
  );
};

export default Home;
