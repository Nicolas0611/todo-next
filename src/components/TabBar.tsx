"use client";

import { useState } from "react";

const tabOptions = [1, 2, 3, 4, 5];
interface Props {
  currentTab?: number;
  tabOptions: number[];
}
export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4],
}: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
  };
  return (
    <div className="grid w-full grid-cols-5 space-x-2 rounded-xl bg-gray-200 p-2">
      {tabOptions.map((option) => (
        <div key={option}>
          <input
            checked={selected === option}
            onChange={() => {}}
            type="radio"
            id={option.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(option)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            1
          </label>
        </div>
      ))}
    </div>
  );
};
