import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import Cart from "./components/Cart";
import DestinationInfo from "./pages/DestinationInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home/:name" element={<Home />}></Route>
      <Route path="/plan" element={<PlanTrip />}></Route>
      <Route path="/cart/:id?" element={<Cart />}></Route>
      <Route path="/destination/:id" element={<DestinationInfo />} />
    </Routes>
  );
};

export default App;
