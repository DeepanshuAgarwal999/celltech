import  React, { useEffect } from "react";
import { DataType, dummyData } from "../dummyData";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [data, setData] = React.useState<DataType[]>([]);
  const [userDestinations, setUserDestinations] = React.useState<DataType[]>(
    []
  );
  const { id = "" } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setData(dummyData);
  }, []);

  useEffect(() => {
    const userDestinationString = localStorage.getItem("userDestination");
    setUserDestinations(JSON.parse(userDestinationString || "[]"));
  }, []);

  useEffect(() => {
    const filteredData = data?.filter((item) => item.id === Number(id));
    const userDestinationString = localStorage.getItem("userDestination");
    const existingData = userDestinationString
      ? JSON.parse(userDestinationString)
      : [];
    const isDuplicate = existingData.some(
      (item: any) => item.id === Number(id)
    );

    if (!isDuplicate) {
      const updatedData: DataType[] = [...existingData, ...filteredData];
      localStorage.setItem("userDestination", JSON.stringify(updatedData));
      // Update the state with the new data immediately
      setUserDestinations(updatedData);
    }
  }, [id, data]);
  const removeItem = (id: number) => {
    const updatedData = userDestinations.filter(
      (item) => item.id !== Number(id)
    );
    // Update localStorage with the new data
    localStorage.setItem("userDestination", JSON.stringify(updatedData));
    // Update the state with the new data
    setUserDestinations(updatedData);
    if (updatedData.length === 0) {
      toast.success("item Removed Successfully", {
        onClose: () => navigate("/"),
      });
    }
  };

  return (
    <div>
      <ToastContainer limit={1} autoClose={1000} />
      <Navbar />
      <section className="w-full min-h-screen relative bg-black">
        <div className="bg-[#18181b] mx-auto lg:w-[1140px] max-w-[1500px]">
          <h1 className="text-center text-4xl py-10 text-white">
            Your Destinations
          </h1>
          <div className="w-full flex items-center justify-center flex-wrap py-10 mx-auto gap-6 ">
            {userDestinations.length > 0 ? (
              userDestinations.map((item) => (
                <div key={item.id}>
                  <Card
                    destination={item.destination}
                    rating={item.rating}
                    authorName={item.authorName}
                    imgUrl={item.imgUrl}
                    likes={item.likes}
                    id={item.id}
                    reviews={item.reviews}
                    authorImg={item.authorImg}
                    description={item.description}
                    title={item.title}
                  />
                  <button
                    className="text-xl bg-red-500 w-fit py-2 mt-3 px-4 mx-auto  text-white font-semibold rounded-xl hover:opacity-80"
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  >
                    Remove item
                  </button>
                </div>
              ))
            ) : (
              <h1 className="max-sm:text-xl md:text-2xl lg:text-4xl font-semibold mt-20 text-center text-white  h-[60vh]">
                Your cart is empty. <br /> Try to add some stuff
              </h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
