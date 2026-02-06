import React from "react";

const HeadingText = ({ hTextOne, hTextTwo, paragraph }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div className="space-y-2">
        <h2 className="text-3xl lg:text-4xl font-bold text-primaryText lg:pl-5 lg:border-l-5 lg:border-accentColor">
          {hTextOne} <span className="text-secondaryText">{hTextTwo}</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">{paragraph}</p>
      </div>
      <div
        className="h-px flex-1
        bg-secondaryText/20
         mx-8 hidden md:block"
      ></div>
    </div>
  );
};

export default HeadingText;
