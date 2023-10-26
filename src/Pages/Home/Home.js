import React from "react";
import { CarousalHome } from "../../Components/CarousalHome";
import { CategoryCard } from "../../Components/Category/CategoryCard";
import { BestSelling } from "../../Components/Books/BestSelling";
import { FeaturesBook } from "../../Components/Books/FeaturesBook";
import { DealBook } from "../../Components/Books/DealBook";
import { NewRelease } from "../../Components/Books/NewRelease";
import { AuthorCaro } from "../../Components/Authors/AuthorCaro";
export const Home = () => {
  return (
    <>
      <CarousalHome />
      <CategoryCard />
      <BestSelling />
      <FeaturesBook />
      <DealBook />
      <NewRelease />
      <AuthorCaro />
    </>
  );
};
