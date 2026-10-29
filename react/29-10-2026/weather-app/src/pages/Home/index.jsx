import { useState } from "react";
import Searchbar from "../../components/Searchbar";
import CityCard from "../../components/CityCard";

const Home = () => {
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <main className="h-screen w-screen bg-[#9cacd8] p-12 flex flex-col gap-6">
      <Searchbar setSearchedCity={setSearchedCity} />

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Result</h2>
        <div className="flex gap-4">
          <CityCard title={"Temperature"} value={"36' F"} city={"Jamshedpur"} />
          <CityCard title={"Humidity"} value={"80%"} city={"Jamshedpur"} />
          <CityCard
            title={"Wind Speed"}
            value={"100 mph"}
            city={"Jamshedpur"}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
