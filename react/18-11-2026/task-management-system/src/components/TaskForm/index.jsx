import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FILTER_OPTIONS } from "../../constants";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";

const schema = yup.object({
  title: yup
    .string()
    .required("Title is required.")
    .min(5, "Title must be min 5 characters.")
    .max(100, "Title must be min 100 characters"),
});

const TaskForm = ({ open, setOpen, title }) => {
  const [getPriority, setGetPriority] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log("Form Data", {
      ...data,
      priority: getPriority,
      createdOn: dayjs().format("DD-MM-YYYY"),
    });
    setOpen(false);
    reset();
    setGetPriority("");
  };

  return (
    <aside
      className={`w-96 max-w-full h-screen flex flex-col bg-white border-l border-gray-400 fixed top-0 ${open ? "right-0" : "-right-full"} transition-all ease-in-out`}
    >
      <div className="flex justify-between items-center p-2 border-b border-gray-400">
        <h4 className="text-lg font-semibold">{title}</h4>
        <button
          className="p-2 bg-[#5925f1] rounded-md"
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp className="text-white text-lg cursor-pointer" />
        </button>
      </div>

      <form
        className="p-2 flex flex-col flex-1"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-semibold">
              Title *
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="Enter title"
              id="title"
              className="px-2 py-1.5 border border-gray-400 rounded-md "
            />
            {errors?.title ? (
              <p className="text-red-500 text-sm font-semibold">
                {errors?.title?.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="priority" className="font-semibold">
              Priority *
            </label>
            <Select
              id="priority"
              className="flex-1"
              options={FILTER_OPTIONS}
              placeholder="Filter tasks"
              onChange={(value) => setGetPriority(value?.value)}
              isClearable
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 font-semibold border border-gray-400 rounded-md  cursor-pointer">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!watch("title")?.length || !getPriority?.length}
            className={`flex-1 font-semibold border border-[#5925f1] rounded-md bg-[#5925f1] text-white py-1 ${watch("title")?.length && getPriority?.length ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-50"}`}
          >
            Save
          </button>
        </div>
      </form>
    </aside>
  );
};

export default TaskForm;
