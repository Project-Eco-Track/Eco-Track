import React from "react";

interface ProgressBarProps {
  size: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ size }) => {
  return (
    <>
      <div className="w-full">
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={size}
          className="block rounded-full bg-gray-200 dark:bg-gray-700"
        >
          <span
            className={`block h-4 rounded-full bg-green-600 text-center text-[10px]/4 w-[${size}%]`}
          >
            <span className="rounded-sm bg-white px-0.5 font-bold text-black">
             {size}%
            </span>
          </span>
        </span>
      </div>
    </>
  );
};

export default ProgressBar;
