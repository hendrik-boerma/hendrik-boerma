import React from 'react';

const Skeleton = () => {
  return (
    <p className="col-span-2 text-md leading-relaxed font-regular text-textcolor md:w-3/4 2xl:w-1/2 space-y-4">
      <span className="block h-4 bg-backgroundcolor2 rounded w-3/4 animate-pulse"></span>
      <span className="block h-4 bg-backgroundcolor2 rounded w-1/2 animate-pulse"></span>
      <span className="block h-4 bg-backgroundcolor2 rounded w-full animate-pulse"></span>
    </p>
  );
};

export default Skeleton;