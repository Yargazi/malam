import React from "react";

interface PaginationControlsProps {
  rangeStart: number;
  rangeEnd: number;
  totalRecords: number;
  onRangeStartChange: (value: number) => void;
  onRangeEndChange: (value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  rangeStart,
  rangeEnd,
  totalRecords,
  onRangeStartChange,
  onRangeEndChange,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={onPrevious}
        disabled={rangeStart === 1}
      >
        ←
      </button>

      <div className="flex items-center gap-2 ">
        <label>
          <input
            type="number"
            min={1}
            max={totalRecords}
            value={rangeStart}
            onChange={(e) => onRangeStartChange(Number(e.target.value))}
            className="w-20 p-2 border border-gray-300 rounded"
          />
        </label>
        {`—`}
        <label>
          <input
            type="number"
            min={rangeStart}
            max={totalRecords}
            value={rangeEnd}
            onChange={(e) => onRangeEndChange(Number(e.target.value))}
            className="w-20 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={onNext}
        disabled={rangeEnd >= totalRecords}
      >
        →
      </button>
    </div>
  );
};

export default PaginationControls;
