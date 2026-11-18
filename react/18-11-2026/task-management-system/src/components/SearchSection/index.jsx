import React from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";
import { FILTER_OPTIONS } from "../../constants";

const SearchSection = () => {
  return (
    <section className="bg-white p-2 rounded-lg flex items-center gap-2">
      <div className="pl-2 rounded-md flex items-center  border border-gray-400 flex-2">
        <IoSearch className="text-gray-400" />
        <input
          className="p-1.5 flex-1"
          type="text"
          placeholder="Search tasks..."
        />
      </div>

      <Select
        className="flex-1"
        options={FILTER_OPTIONS}
        placeholder="Filter tasks"
        isClearable
      />
    </section>
  );
};

export default SearchSection;
