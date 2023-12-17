import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { DataType, dummyData } from "../dummyData";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [trip, setTrip] = useState(true);
  const navigate = useNavigate();
  const param = useParams();
  React.useEffect(() => {
    setSearchTerm("");
    if (param.name) {
      setTrip(true);
      setSearchTerm(param.name);
    }
    setData(dummyData);
  }, [param.name]);
  const filteredData = data?.filter((item) =>
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="bg-black w-full min-h-screen ">
        <div className="max-w-[1500px] lg:w-[1140px] mx-auto bg-[#18181b] py-10">
          {/* here i use the concept of react lift state which is illegal but i used to avoid complexity */}
          <SearchBar searchItem={searchTerm} setSearchItem={setSearchTerm} />
          <div className="max-w-[1500px] mt-10 pt-10 flex flex-wrap gap-6 items-center justify-center ">
            {filteredData?.map((item) => (
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
                {trip &&
                  item.destination.toLowerCase() ===
                    searchTerm.toLowerCase() && (
                    <button
                      className="text-xl bg-red-500 w-fit py-2 mt-3 px-4  text-white font-semibold rounded-xl hover:opacity-80"
                      onClick={() => navigate(`/cart/${item.id}`)}
                    >
                      Add Trip
                    </button>
                  )}
              </div>
            ))}
            {filteredData.length === 0 && (
              <>
                <h1 className="text-3xl text-center h-[70vh] text-white">
                  No Result Found <br /> Try to search something else
                </h1>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
