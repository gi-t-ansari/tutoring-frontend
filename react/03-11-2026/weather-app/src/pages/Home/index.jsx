import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import CityCard from "../../components/CityCard";
import { useDebounce } from "../../hook";
import axios from "axios";
import { WEATHER_API_ENDPOINT, WEATHER_API_KEY } from "../../constants";

const Home = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const debouncedSearchedCity = useDebounce(searchedCity, 500);
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `${WEATHER_API_ENDPOINT}?key=${WEATHER_API_KEY}&q=${debouncedSearchedCity}`,
      );

      setWeatherData(response?.data);
    } catch (err) {
      setWeatherData({
        error: {
          message: "Searched location not found",
        },
      });
    }
  };

  useEffect(() => {
    if (debouncedSearchedCity?.length) {
      fetchWeatherData();
    }
  }, [debouncedSearchedCity]);

  return (
    <main className="h-screen w-screen overflow-auto bg-[#9cacd8] p-12 flex flex-col gap-6  max-md:p-10 max-sm:p-8">
      <Searchbar setSearchedCity={setSearchedCity} />

      <div className="flex flex-col gap-4 flex-1 overflow-auto">
        <h2 className="text-lg font-semibold">
          {debouncedSearchedCity?.length
            ? "Result"
            : "Search a city to check weather."}
        </h2>
        <div className="flex flex-wrap gap-4 ">
          {debouncedSearchedCity?.length ? (
            weatherData?.error ? (
              <p className="text-red-500 text-sm">
                {weatherData?.error?.message}
              </p>
            ) : (
              <>
                <CityCard
                  title={"Temperature"}
                  value={`${weatherData?.current?.temp_f} °F`}
                  city={weatherData?.location?.name}
                />
                <CityCard
                  title={"Humidity"}
                  value={`${weatherData?.current?.humidity}%`}
                  city={weatherData?.location?.name}
                />
                <CityCard
                  title={"Wind Speed"}
                  value={`${weatherData?.current?.wind_mph} mph`}
                  city={weatherData?.location?.name}
                />
              </>
            )
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Home;
