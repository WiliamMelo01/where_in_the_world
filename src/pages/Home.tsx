import React, { useState, useEffect, useContext } from "react";
import { CountryContextInterface } from "../@types/CountryContext.type";
import Card from "../components/Card";
import Header from "../components/Header";
import RegionFilter from "../components/RegionFilter";
import SearchInput from "../components/SearchInput";
import { countryContext } from "../context/countrys";

export default function Home() {
  const { data } = useContext(countryContext) as CountryContextInterface;

  return (
    <div className="w-full min-h-[100vh] bg-bege-100 dark:bg-dark-mode-bg-100 font-nunito text-text-black-100 dark:text-white-50">
      <Header />
      <div className="px-12 w-full h-full max-[452px]:px-6">
        <div className="w-full flex justify-between items-start max-[590px]:flex-col max-[590px]:justify-center">
          <SearchInput />
          <RegionFilter />
        </div>
        <div className="flex flex-wrap gap-x-20 justify-between max-[1230px]:justify-around">
          {data &&
            data.map((country, index) => {
              return (
                <Card
                  key={index}
                  Region={country.region}
                  Capital={country.capital}
                  Population={country.population}
                  country={country.name}
                  countryFlag={country.flags.png}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
