import React from "react";

const SkeletonLoading: React.FC = () => {
  return (
    <div className="skeleton lg:flex-1">
      <div className="bg-white w-full p-4 rounded-lg shadow-md text-black">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="max-w-sm animate-pulse">
              <div className="h-8 w-8 bg-gray-200 rounded-sm dark:bg-gray mr-2" />
            </div>
            <div>
              <div className="max-w-sm animate-pulse">
                <div className="h-6 w-48 bg-gray-200 rounded-sm dark:bg-gray mb-2" />
              </div>
              <div className="max-w-sm animate-pulse">
                <div className="h-5 w-48 bg-gray-200 rounded-sm dark:bg-gray" />
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm animate-pulse">
              <div className="h-5 w-10 bg-gray-200 rounded-sm dark:bg-gray mb-2" />
            </div>
            <div className="max-w-sm animate-pulse">
              <div className="h-5 w-14 bg-gray-200 rounded-sm dark:bg-gray" />
            </div>
          </div>
        </div>
        <div className="max-w-sm animate-pulse">
          <div className="h-5 w-58 bg-gray-200 rounded-sm dark:bg-gray mt-2 mb-8" />
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 py-2">
          <div className="flex items-center">
            <div className="max-w-sm animate-pulse">
              <div className="h-5 w-5 bg-gray-200 rounded-sm dark:bg-gray mr-2" />
            </div>
            <div className="max-w-sm animate-pulse">
              <div className="h-5 w-32 bg-gray-200 rounded-sm dark:bg-gray" />
            </div>
          </div>
          <div className="max-w-sm animate-pulse">
            <div className="h-5 w-14 bg-gray-200 rounded-sm dark:bg-gray" />
          </div>
          <div className="max-w-sm animate-pulse">
            <div className="h-5 w-5 bg-gray-200 rounded-sm dark:bg-gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
