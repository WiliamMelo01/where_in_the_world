import React, { useEffect, useState, useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Countrys } from '../@types/Country.type';
import { CountryContextInterface } from '../@types/CountryContext.type';
import { countryContext } from '../context/countrys';

import { data } from '../../data';

export default function SearchInput() {
  const [country, setCoutry] = useState('');
  const [alert, setAlert] = useState('');

  const { setData } = useContext(countryContext) as CountryContextInterface;

  async function handleSearch() {
    setCoutry('');
    const Countrys = data;
    const countrySearched = Countrys.filter(
      (item) =>
        item.name === country ||
        item.translations.br === country ||
        item.translations.de === country ||
        item.translations.es === country ||
        item.translations.fa === country ||
        item.translations.fr === country ||
        item.translations.hr === country ||
        item.translations.hu === country ||
        item.translations.it === country ||
        item.translations.ja === country ||
        item.translations.nl === country ||
        item.translations.pt === country
    );
    if (countrySearched.length > 0) {
      setData(countrySearched);
      setAlert('');
    } else {
      setAlert('Country not found!');
      setData(Countrys);
    }
  }

  return (
    <div className="w-1/4 h-14 bg-white-50 dark:bg-dark-mode-element-100 my-10 shadow-box dark:shadow-box-dark flex items-center relative text-text-input-100 rounded-md max-[950px]:w-[40%] max-[948px]:w-[50%] max-[590px]:w-[100%] max-[590px]:mb-4 max-[590px]:mt-10">
      <AiOutlineSearch
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 dark:text-white-50"
        size={24}
        onClick={handleSearch}
      />
      <input
        type="text"
        className="h-full w-full outline-none absolute left-0 top-0 pl-12 text-text-black rounded-md dark:bg-dark-mode-element-100 dark:placeholder:text-white-50 dark:text-white-50"
        placeholder="Seach for a country..."
        value={country}
        onChange={(e) => setCoutry(e.target.value)}
      />
      {alert && (
        <p className="absolute -bottom-10 text-[#F00] font-semibold">{alert}</p>
      )}
    </div>
  );
}
