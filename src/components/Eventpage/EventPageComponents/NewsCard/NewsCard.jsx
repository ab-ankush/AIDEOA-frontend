import { useState } from "react";

const NewsCard = ({ imageSrc, headline, content }) => {
  const [open, setOpen] = useState(false);

  const toggleText = () => {
    setOpen(!open);
  };

  return (
    <div className="flex-col lg:flex-row w-[90%] lg:w-[70%] gap-x-5 flex max-w-screen-xl bg-gray-200 rounded-xl lg:w-11/12 m-auto p-5 lg:p-10 justify-between">
      <div className="rounded-xl mb-6 m-auto overflow-hidden">
        <img src={imageSrc} alt="slider-image" />
      </div>
      <div className="flex flex-col gap-y-6 justify-center lg:w-2/4">
        <div className="font-medium">
          <h3>{headline}</h3>
        </div>
        <div className="relative">
          <p
            className={`max-sm:overflow-hidden ${
              open ? "max-h-full" : "max-sm:max-h-[3em]"
            } text-gray-700`}
          >
            {content}
          </p>
          <button
            onClick={toggleText}
            className="mt-2 max-sm:block hidden text-blue-500 hover:underline focus:outline-none"
          >
            {open ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
