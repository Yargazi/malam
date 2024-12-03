import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className=" bg-gray-300 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search by car number..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
