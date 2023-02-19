import React, { useState, useContext } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { Countrys } from '../@types/Country.type';
import { CountryContextInterface } from '../@types/CountryContext.type';
import { countryContext } from '../context/countrys';
import { data } from '../../data';

export default function RegionFilter() {
  const [showContinents, setShowContinents] = useState(false);
  const { setData } = useContext(countryContext) as CountryContextInterface;
  async function handleFilter(continent: string) {
    console.log(data);
    const countrys: Countrys = data;
    continent === 'All'
      ? setData(countrys)
      : setData(countrys.filter((country) => country.region === continent));
    setShowContinents(false);
  }

  return (
    <div className="w-[13%] h-14 my-10 relative font-nunito font-semibold bg-bege-100 dark:bg-dark-mode-element-100 max-[1512px]:w-[16%] max-[1290px]:w-[20%] max-[1027px]:w-[25%] max-[845px]:w-[38%] max-[590px]:w-[60%] max-[590px]:my-4 max-[450px]:w-[75%]">
      <div className="w-full h-full flex items-center justify-between px-6 bg-white-50 dark:bg-dark-mode-element-100 shadow-box dark:shadow-box-dark  rounded absolute top-0">
        <p className="">Filter by region</p>
        <IoIosArrowDown
          size={24}
          className="hover:cursor-pointer"
          onClick={() => setShowContinents(!showContinents)}
        />
      </div>
      {showContinents && (
        <div className="w-full bg-white-50 shadow-box dark:shadow-box-dark dark:bg-dark-mode-element-100 rounded px-6 absolute -bottom-52">
          {['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'].map(
            (continent, index) => {
              return (
                <p
                  key={index}
                  className="mt-2 mb-2 hover:cursor-pointer"
                  onClick={() => handleFilter(continent)}
                >
                  {continent}
                </p>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
