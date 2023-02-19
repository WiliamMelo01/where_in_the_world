import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { CgArrowLongLeft } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { Country, Countrys } from "../@types/Country.type";
import CardDetail from "../components/CardDetail";

import { data as CountrysData } from "../../data";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const country = new URLSearchParams(location.search).get("country");
  const [data, setData] = useState<Country>();

  useEffect(() => {
    (async () => {
      const countrys: Countrys = CountrysData;
      setData(countrys.filter((item) => item.name === country)[0]);
    })();
  }, [country]);
  console.log(data);

  function handleBack() {
    navigate("/");
  }
  const currencies: string[] = [];
  if (data && data.currencies) {
    data.currencies.map((item) => {
      currencies.push(item.name);
    });
  }
  const languages: string[] = [];
  if (data && data.languages) {
    data.languages.map((item) => {
      languages.push(item.name);
    });
  }

  function getCountryNamesByCodes(codes: string[]) {
    let names: string[] = [];
    codes.map((code) => {
      const country: Country | undefined = CountrysData.find(
        (country) => country.alpha3Code === code
      );
      if (country) {
        names.push(country.name);
      }
    });
    return names;
  }

  return (
    <div className="w-full min-h-[100vh] bg-bege-100 dark:bg-dark-mode-element-100 dark:text-white-50 font-nunito text-text-black-100">
      <Header />
      <div className="px-12 w-full h-full">
        <div
          className="h-10 w-40 flex items-center justify-center gap-2 bg-white-50 dark:bg-dark-mode-element-100 shadow-box dark:shadow-box-dark mt-20 mb-20 rounded-md hover:cursor-pointer max-[950px]:mb-10 max-[950px]:mt-10"
          onClick={handleBack}
        >
          <CgArrowLongLeft size={24} />
          <button className="dark:text-white-50 ">Back</button>
        </div>
        {data && data.topLevelDomain && data.currencies && (
          <div className="w-full flex gap-10 justify-around max-[950px]:flex-col max-[950px]:items-center">
            <img
              src={data.flags.svg}
              alt={`${data.name}'s flag image`}
              className="w-1/2 max-h-[500px] max-w-[800px] shadow-box dark:shadow-box-dark max-[950px]:w-[80%] max-[950px]:max-h-[300px]"
            />
            <div className="max-[950px]:w-[80%]">
              <p className="font-extrabold text-3xl mb-10">{data.name}</p>
              <div className="w-full flex gap-20 mb-20  max-[950px]:flex-col  max-[950px]:gap-10  max-[950px]:mb-10">
                <div className="flex flex-col gap-2">
                  <CardDetail
                    Information="Native Name"
                    value={data.nativeName}
                  />
                  <CardDetail
                    Information="Population"
                    value={data.population
                      .toLocaleString("pt-BR")
                      .toString()
                      .replace(/[.]/g, ",")}
                  />
                  <CardDetail Information="Region" value={data.region} />
                  <CardDetail Information="Sub Region" value={data.subregion} />
                  <CardDetail Information="Capital" value={data.capital} />
                </div>
                <div className=" flex flex-col gap-2 flex-wrap">
                  <CardDetail
                    Information="Top Level Domain"
                    value={data.topLevelDomain[0]}
                  />
                  <CardDetail Information="Currencies" value={currencies} />
                  <CardDetail Information="Languages" value={languages} />
                </div>
              </div>
              {data.borders && (
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-semibold">Borders:</p>
                  {getCountryNamesByCodes(data.borders).map((border) => {
                    return (
                      <button
                        className="bg-white-50 dark:bg-dark-mode-element-100 shadow-box dark:shadow-box-dark py-1 px-2 rounded whitespace-nowrap outline-none"
                        onClick={() => navigate(`/details?country=${border}`)}
                      >
                        {border}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
