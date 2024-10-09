
import React from "react";
import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page M",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page N",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page O",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page P",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page K",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page R",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page S",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page T",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const ChartOne = () => {

  return (
    <div className="w-[328px] h-[187px] border-[1px] rounded-lg bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold text-base text-[#1C1D22]">Total Sales</h2>
          <h3 className="font-medium text-[12px] text-[#5C5F6A] mt-[6px]">THIS MONTH</h3>
        </div>
        <span className="font-bold text-2xl text-[#1C1D22]">$4,235</span>
      </div>
     <div className="mt-11">
      <BarChart width={280} height={50} data={data} barSize={15}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
      </div>
    </div >
  );
}
export default ChartOne;
