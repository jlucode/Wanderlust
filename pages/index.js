import  { React, useState } from "react";
import ReactTooltip from "react-tooltip";
import Navbar from "./Navbar"
import MapChart from "./MapChart";
import NorthAmerica from "./continents/NorthAmerica"
import SouthAmerica from "./continents/SouthAmerica"
import Africa from "./continents/Africa"
import Europe from "./continents/Europe"
import Asia from "./continents/Asia"
import Australia from "./continents/Australia"

function App() {
  const [content, setContent] = useState("");

  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
      <Navbar />
      <NorthAmerica />
      <SouthAmerica />
      <Africa />
      <Europe />
      <Asia />
      <Australia/>
    </div>
  );
}

export default App;