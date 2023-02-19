import React from 'react';
import CardDetail from './CardDetail';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  country: string;
  countryFlag: string;
  Population: number;
  Region: string;
  Capital: string | undefined;
};

export default function Card({
  Capital,
  Population,
  Region,
  country,
  countryFlag,
}: CardProps) {
  const navigate = useNavigate();

  function handleClick() {
    console.log(country);
    navigate(`/details?country=${country}`);
  }
  return (
    <div
      className="w-[325px] h-[150px] font-nunito text-text-black-100 dark:text-white-50 mb-60 hover:cursor-pointer max-[450px]:w-full"
      onClick={handleClick}
    >
      <img
        className="w-[325px] rounded-tl-md rounded-tr-md h-[200px] max-[450px]:w-full"
        src={countryFlag}
        alt={`${country}'s flag image`}
      />
      <div className="w-[325px] h-full bg-white-50 dark:bg-dark-mode-element-100 pl-4 drop-shadow-xl  rounded-bl-md rounded-br-md max-[450px]:w-full">
        <p className="font-extrabold text-xl pt-4">{country}</p>
        <CardDetail
          Information="Population"
          value={Population.toLocaleString('pt-BR')
            .toString()
            .replace(/[.]/g, ',')}
        />
        <CardDetail Information="Region" value={Region} />
        <CardDetail Information="Capital" value={Capital} />
      </div>
    </div>
  );
}
