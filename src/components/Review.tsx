import React, { useState } from "react";
interface ReviewProps {
  onSubmit: (review: {
    review: string;
    date: string;
    postedBy: string;
    like: number;
  }) => void;
}

// const Review = ({ id }: any) => {
// console.log(new Date().toString());
// console.log(new Date().getDate() + "" + new Date().getDate()).toString();

const Review: React.FC<ReviewProps> = ({ onSubmit }) => {
  const [open, setOpen] = useState(true);
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  
  const month = (currentDate.getMonth() + 1).toString();
  const day = currentDate.getDate().toString();
  const [newReview, setNewReview] = useState({
    review: "",
    date: (year + "-" + month + "-" + day),
    postedBy: "",
    like: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newReview.review && newReview.postedBy) {
      onSubmit(newReview);
      setNewReview({ review: "", date: "", postedBy: "", like: 0 });
      setOpen(false); // Close the form after submission
    }
  };

  return (
    <>
      {open && (
        <div className=" max-sm:w-[250px] w-[350px] h-[300px] bg-[#141415] position px-4 z-50 rounded-lg ">
          <div className="flex justify-between gap-4 items-center pt-6">
            <h1 className="text-xl text-white ">Add Review</h1>
            <button
              className=" outline-none text-gray-400 w-fit"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <form
            action=""
            autoComplete="off"
            className="py-10 flex flex-col gap-6 items-center justify-center w-full "
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-[#27272C] py-4 px-1 w-full text-white bg-transparent outline-none"
              value={newReview.postedBy}
              name="postedBy"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Review"
              className="border-b border-[#27272C] py-4 px-1 w-full text-white bg-transparent outline-none"
              value={newReview.review}
              name="review"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-5 py-2 min-w-[80px] bg-[#14b8a6] outline-none rounded-xl text-white font-semibold hover:opacity-90 w-fit self-end"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Review;
