import { Countrys } from "./Country.type";

export interface CountryContextInterface {
  data: Countrys | undefined;
  setData: React.Dispatch<React.SetStateAction<Countrys | undefined>>;
}
