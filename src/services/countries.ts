import axios from 'axios';
export interface CountryInfoI {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface CountryI {
  updated: number;
  country: string;
  countryInfo: CountryInfoI;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export const getAllCountries = async (): Promise<CountryI[]> => {
  const {data} = await axios.get(
    `https://corona.lmao.ninja/v2/countries?sort=country`,
  );
  return data;
};
