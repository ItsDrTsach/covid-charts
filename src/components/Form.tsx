import React from "react";
import Select from "react-select";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { InputGroup } from "../ui/Input";
import {
  countriesListState,
  countryOneState,
  countryTwoState,
} from "../Atoms/covidData";
import { Label } from "../ui/Typography";
const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const Form: React.FC = () => {
  const countriesArray: Array<SelectInput> | null = useRecoilValue(
    countriesListState
  );

  const setFirstCountry = useSetRecoilState(countryOneState);
  const setSecondCountry = useSetRecoilState(countryTwoState);

  if (!countriesArray) return null;

  const handleFirstInputChange = (input: any) => {
    setFirstCountry(input.value);
  };

  const handleSecondInputChange = (input: any) => {
    setSecondCountry(input.value);
  };
  return (
    <div>
      {/* <InputGroup> */}
      <Label>Select first country</Label>
      <Select
        styles={customStyles}
        options={countriesArray}
        onChange={handleFirstInputChange}
      />
      <Label>Select Second country</Label>
      <Select
        styles={customStyles}
        options={countriesArray}
        onChange={handleSecondInputChange}
      />
      {/* </InputGroup> */}
    </div>
  );
};
export default Form;
