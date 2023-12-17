import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/home/${name}`);
  };
  return (
    <>
      <div className=" max-sm:[240px] sm:w-[450px] lg:w-[600px] pb-6 mt-10 blurBg rounded-xl z-50">
        <form
          action=""
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-10 px-10 "
        >
          <input
            type="text"
            required
            value={name}
            placeholder="Where To e.g. Tokyo,Paris"
            onChange={(e) => setName(e.target.value)}
            className="max-sm:py-3 py-4 px-6 border rounded-xl outline-none w-full mx-auto "
          />
          <p className="text-red-500 text-center text-md drop-shadow-xl">
            Choose a destination to start planning
          </p>
          <div className="flex max-sm:flex-col items-center gap-x-2 gap-y-5  justify-between">
            <div className="">
              <label
                htmlFor="end"
                className="text-sm font-semibold block text-white"
              >
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="max-sm:py-2 py-4 px-6 border rounded-xl outline-none  mx-auto"
              />
            </div>
            <div className="">
              <label
                htmlFor="end"
                className="text-sm font-semibold block text-white"
              >
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="max-sm:py-2 py-4 px-6 border rounded-xl outline-none  mx-auto"
              />
            </div>
          </div>
          <button
            type="submit"
            className="max-sm:text-lg text-xl bg-red-500 w-fit mx-auto py-3 sm:py-4 px-2 text-white font-semibold rounded-xl hover:opacity-80"
          >
            Confirm Trip 🚀
          </button>
        </form>
      </div>
      );
    </>
  );
};

export default Form;
