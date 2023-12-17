import  { useEffect, useState } from "react";
import { DataType, dummyData } from "../dummyData";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import Review from "./Review";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface ToggleType {
//   toggleReview: boolean;
//   setToggleReview: (e:any) => void;
// }

const Destination = () => {
  const [data, setData] = useState<DataType[]>([]);
  //   const [toggleReview, setToggle] = useState(false);
  const { id } = useParams();
  const [isToggled, setToggle] = useState(false);

  useEffect(() => {
    setData(dummyData);
  }, []);
  const filteredData = data?.filter((item) => item.id === Number(id));

  // Function to toggle the value
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  console.log(isToggled);
  const addReview = (review: {
    review: string;
    date: string;
    postedBy: string;
    like: number;
  }) => {
    const updatedData = data?.map((item) => {
      if (item.id === Number(id)) {
        return {
          ...item,
          reviews: [...item.reviews, review],
        };
      }
      return item;
    });
    setData(updatedData);
    toast.success("Review added Successfully")
  };
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <section className="w-full min-h-screen bg-black z-40 relative">
        <div className="bg-[#18181b] lg:w-[1140px] w-full mx-auto max-w-[1500px] py-8">
          <main className="flex justify-center mx-auto">
            {filteredData?.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center w-[80%] gap-8  border-x border-[#27272C] px-4 md:px-14"
              >
                <h1 className="max-sm:text-xl text-3xl text-white self-start ">
                  {item.title}
                </h1>
                <img
                  src={item.imgUrl}
                  alt=""
                  className="mx-auto w-[80%] h-auto object-cover"
                />
                <p className="max-sm:text-lg text-2xl text-white">
                  About {item.destination}
                </p>
                <p className="max-sm:text-xs text-basis text-white text-justify">
                  {item.description}
                </p>
                <p className="max-sm:text-xs text-basis text-[#d8d8dc] flex items-center gap-3 py-2 self-end">
                  <span className="flex items-center gap-4">
                    Author -
                    <img
                      src={item.authorImg}
                      alt=""
                      width={16}
                      height={16}
                      className="border rounded-[50%]"
                    />
                  </span>
                  <span className="font-semibold">{item.authorName}</span>
                </p>
                {/* Review System */}
                <div className="mt-10 w-full flex flex-col relative">
                  <h1 className="max-sm:text-lg sm:text-xl lg:text-3xl text-white border-b py-2 border-[#14b8a6]">
                    Reviews
                  </h1>
                  <div>
                    {item.reviews.map((review, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center max-sm:text-xs max-sm:gap-2 w-full px-2 text-white border-b border-[#27272C] py-2 my-10">
                          <div className="flex flex-col gap-2">
                            <h1>{review.review}</h1>
                            <span className="flex items-center gap-1">
                              <BiLike /> {review.like}
                              &nbsp; <BiDislike />
                            </span>
                          </div>
                          <div className="flex  flex-col gap-2 max-sm:gap-[2px] max-sm:text-[10px]">
                            <h2>
                              Posted By - &nbsp;
                              <span className="font-semibold">
                                {review.postedBy}
                              </span>
                            </h2>
                            <h3>Posted on - {review.date}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className=" px-5 py-2 min-w-[100px] bg-[#14b8a6] outline-none rounded-xl text-white font-semibold hover:opacity-90 w-fit self-end"
                    onClick={handleToggle}
                  >
                    Share Review
                  </button>
                  {isToggled && <Review onSubmit={addReview} />}
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
};

export default Destination;
