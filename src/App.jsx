import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import BlurCircle from "./components/blurCircle";
import ApexChart from "./components/radialChart";
import LineChart from "./components/LineChart";
import Systems from "./components/Systems";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BlurCircle top="0" left="30%" />
      <div className="flex w-full items-top justify-center space-x-10 mt-12">
        <div className="flex-row space-y-10">
          <ApexChart />
          <Systems />
        </div>
        <div>
          <LineChart />
        </div>
      </div>

      <div className="w-[82%]  items-center m-auto mt-10">
        <Alert />
      </div>
    </>
  );
}

export default App;
