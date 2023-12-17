import Form from "../components/Form";
import Navbar from "../components/Navbar";

const PlanTrip = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen formBgImg relative ">
        <div className="bg-black/70 w-full h-full absolute z-[10]"></div>
        <h1 className="text-center max-sm:text-2xl sm:text-4xl lg:text-5xl font-bold pt-6 text-[#fff] z-[50] relative">
          Book <span className="text-orange-600">Trip</span> Now !
        </h1>
        <div className="flex flex-col gap-10 items-center h-[80vh] justify-center z-50">
          <Form />
        </div>
      </div>
    </>
  );
};

export default PlanTrip;
