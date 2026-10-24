import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, // regex
      "Please enter a valid email",
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 character")
    .max(20, "Password must be max 20 character")
    .matches(/[A-Z]/, "Password must include an uppercase.")
    .matches(/[a-z]/, "Password must include lowercase.")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&#]/, "Must contain at least one special character"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log("Form data -->", data);
    reset();
  };

  // useEffect(() => {
  //   setValue("email", "abc@gmail.com");
  //   setValue("password", "123456");
  // }, []);

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
            className={`w-full border rounded-sm py-2 px-4 ${errors?.email && "border-red-500"}`}
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors?.email ? (
            <p className="text-red-500 text-xs">{errors?.email?.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className={`w-full border rounded-sm py-2 px-4 ${errors?.password && "border-red-500"}`}
            id="password"
            type="password"
            placeholder="Enter your email"
            {...register("password")}
          />
          {errors?.password ? (
            <p className="text-red-500 text-xs">{errors?.password?.message}</p>
          ) : null}
        </div>

        <button
          // disabled={!watch("email") || !watch("password")}
          type="submit"
          className={`w-full p-3 rounded-full bg-amber-500 mt-4 font-semibold text-lg cursor-pointer text-white `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
