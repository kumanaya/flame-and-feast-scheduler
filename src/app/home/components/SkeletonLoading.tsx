import React from "react";

const SkeletonLoading: React.FC = () => {
  return (
    <div
      className="skeleton rounded-lg p-4 shadow-md text-black shadow-sm flex flex-col items-center justify-center cursor-pointer text-white shadow-lg animate-pulse"
      style={{ backgroundColor: "#2B2B2B", height: 240, width: 200 }}
    >
      <div className="h-240 w-200 bg-gray-200 rounded-sm dark:bg-gray mr-2" />
    </div>
  );
};

export default SkeletonLoading;
