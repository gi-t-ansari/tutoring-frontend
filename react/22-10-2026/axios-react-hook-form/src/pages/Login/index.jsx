import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset, watch } = useForm();

  const handleLogin = (data) => {
    console.log("Form data -->", data);
    reset();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-4 w-96"
        onSubmit={handleSubmit(handleLogin)}
        // onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border rounded-sm py-2 px-4"
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border rounded-sm py-2 px-4"
            id="password"
            type="password"
            placeholder="Enter your email"
            {...register("password")}
          />
        </div>

        <button
          disabled={!watch("email") || !watch("password")}
          type="submit"
          className={`w-full p-3 rounded-full ${watch("email")?.length && watch("password") ? "bg-amber-500" : "bg-gray-400"} mt-4 font-semibold text-lg cursor-pointer text-white `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
