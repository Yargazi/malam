"use client";

import React, { useState, useEffect } from "react";
import { Car } from "../types/car";
import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

interface CarsTableProps {
  cars: Car[];
}

const CarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(100);
  const [totalRecords, setTotalRecords] = useState(cars.length);

  useEffect(() => {
    const limit = rangeEnd - rangeStart + 1;
    const offset = rangeStart - 1;

    const updatedCars = cars.slice(offset, offset + limit);
    setFilteredCars(updatedCars);
  }, [rangeStart, rangeEnd, cars]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query === "") {
      setFilteredCars(cars.slice(rangeStart - 1, rangeEnd));
    } else {
      const filtered = cars.filter((car) =>
        car.mispar_rechev.toString().includes(query)
      );
      setFilteredCars(filtered.slice(0, rangeEnd - rangeStart + 1)); // Отображаем только текущий диапазон
    }
  };

  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-row-reverse justify-between">
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        <PaginationControls
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          totalRecords={totalRecords}
          onRangeStartChange={setRangeStart}
          onRangeEndChange={setRangeEnd}
          onNext={() => {
            const diff = rangeEnd - rangeStart + 1;
            if (rangeEnd < totalRecords) {
              setRangeStart(rangeStart + diff);
              setRangeEnd(Math.min(rangeEnd + diff, totalRecords));
            }
          }}
          onPrevious={() => {
            const diff = rangeEnd - rangeStart + 1;
            if (rangeStart > 1) {
              setRangeStart(Math.max(1, rangeStart - diff));
              setRangeEnd(rangeStart - 1);
            }
          }}
        />
      </div>
      <div className="overflow-x-auto max-h-[650px] overflow-y-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 sticky top-0">
              {filteredCars.length > 0 &&
                Object.keys(filteredCars[0]).map((header) => (
                  <th key={header} className="border border-gray-300 px-4 py-2">
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredCars.map((car, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {Object.keys(car).map((key) => (
                  <td
                    key={`${index}-${key}`}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {car[key as keyof Car]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarsTable;
