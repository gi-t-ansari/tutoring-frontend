import { IoSearch } from "react-icons/io5";

const Searchbar = ({ setSearchedCity }) => {
  return (
    <div className="w-1/2 h-fit rounded-lg overflow-hidden bg-white relative">
      <input
        className="py-2 px-4 pr-12 border-0 w-full rounded-lg"
        type="text"
        placeholder="Search city"
        onChange={(e) => setSearchedCity(e.target.value)}
      />
      <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Searchbar;
