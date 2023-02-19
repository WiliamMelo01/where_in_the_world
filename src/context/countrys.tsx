import { createContext, ReactNode, useEffect, useState } from "react";
import { Countrys } from "../@types/Country.type";
import { CountryContextInterface } from "../@types/CountryContext.type";
import { data as countryData } from "../../data";

export const countryContext = createContext<CountryContextInterface | null>(
  null
);

export default function CountryProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<typeof countryData>();
  useEffect(() => {
    setData(countryData);
  }, []);

  return (
    <countryContext.Provider value={{ data, setData }}>
      {children}
    </countryContext.Provider>
  );
}
