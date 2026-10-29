import { IoSunnySharp } from "react-icons/io5";

const CityCard = ({ title, value, city }) => {
  return (
    <div className="w-44 h-56 rounded-lg flex flex-col overflow-hidden">
      <div className="p-4 flex-1 bg-[#bfd5f0] relative">
        <h5 className="text-lg font-semibold text-white">{title}</h5>
        <span className="text-3xl font-bold text-white">{value}</span>
        <IoSunnySharp className="absolute right-4 bottom-4 text-white text-xl" />
      </div>
      <div className="py-2 text-center bg-white">{city}</div>
    </div>
  );
};

export default CityCard;
