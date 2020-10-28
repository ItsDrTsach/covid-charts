import { atom, selector } from "recoil";
import axios from "axios";
const apiUrl =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
export const countryOneState = atom<number | null>({
  key: "countryOneState",
  default: 233,
});
export const countryTwoState = atom<number | null>({
  key: "countryTwoState",
  default: 138,
});

export const apiDataState = selector({
  key: "apiDataState",
  get: async ({ get }) => {
    let { data: allData } = await axios.get(apiUrl);
    return allData;
  },
});

export const headerState = selector({
  key: "headerState",
  get: ({ get }) => {
    const allData = get(apiDataState);

    const header = allData
      .split("\n")
      .slice(0)
      .map((line: string) => line.split(","))[0]
      .slice(4);
    return header;
  },
});
export const countriesDataState = selector({
  key: "countriesDataState",
  get: ({ get }) => {
    const allData = get(apiDataState);
    const countries = allData
      .split("\n")
      .slice(0)
      .map((line: string) => line.split(","));
    return countries;
  },
});

export const graphDataState = selector({
  key: "graphDataState",
  get: ({ get }) => {
    //   numbers by react select
    const firstCountryNumber = get(countryOneState);
    const secondCountryNumber = get(countryTwoState);
    // header extracted from the table with dates
    const header = get(headerState);
    // array of all countries and number of patients
    const countries = get(countriesDataState);
    if (!firstCountryNumber || !secondCountryNumber || !header || !countries)
      return null;
    const firstCountryName: string = countries[firstCountryNumber][1];
    const secondCountryName: string = countries[secondCountryNumber][1];
    console.log(firstCountryName, secondCountryName);

    const formatData: dataCell[] = [];
    for (let i = 4; i < header.length; i++) {
      const newRow: dataCell = { name: header[i] };
      newRow[firstCountryName] = parseInt(countries[firstCountryNumber][i]);
      newRow[secondCountryName] = parseInt(countries[secondCountryNumber][i]);
      formatData.push(newRow);
    }

    return formatData;
  },
});

export const countriesListState = selector({
  key: "countriesListState",
  get: ({ get }) => {
    const countries = get(countriesDataState);

    if (!countries) return null;
    let countriesArray: Array<{ value: number; label: string }> = [];
    countries.slice(1).forEach((country: Array<string>, i: number) => {
      const label = country[0] === "" ? country[1] : country[0] + country[1];
      const newOption = {
        value: i + 1,
        label,
      };
      countriesArray.push(newOption);
    });
    console.log(countries);
    return countriesArray;
  },
});
