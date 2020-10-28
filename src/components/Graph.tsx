import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRecoilValue } from "recoil";
import { graphDataState } from "../Atoms/covidData";
import { colors } from "../ui/constants";
const Graph: React.FC = () => {
  const data = useRecoilValue(graphDataState);

  if (!data) return null;
  const firstCountryName = Object.keys(data[0])[1];
  const secondCountryName = Object.keys(data[0])[2];
  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={firstCountryName}
        stroke={colors.primary}
        // strokeDasharray="2"
      />
      <Line
        // type="monotone"
        dataKey={secondCountryName}
        stroke={colors.lightGray}
        // strokeDasharray="3 4 5 2"
      />
    </LineChart>
  );
};
export default Graph;
