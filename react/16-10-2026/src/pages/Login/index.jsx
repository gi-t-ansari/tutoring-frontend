import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className=" text-center">
        <span className="text-3xl font-semibold">Welcome to</span>
        <br />
        <span className="font-bold text-[#FF615C] text-5xl">Sparks Admin</span>
      </h1>
      <div className="flex flex-col gap-0.5 w-96 mt-1">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 border rounded-sm"
          type="email"
          id="email"
          placeholder="Enter email"
        />
      </div>
      <div className="flex flex-col gap-0.5 w-96 mt-1">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 border rounded-sm"
          type="password"
          id="password"
          placeholder="Enter password"
        />
      </div>
      {/* <button className="w-96 p-4 py-2 text-white text-lg bg-[#ff615c] rounded-full cursor-pointer">
        Login
      </button> */}
      <Tooltip title="Login Here" placement="top">
        <Button onClick={() => setShowAlert(!showAlert)} variant="contained">
          Login
        </Button>
      </Tooltip>

      <Accordion>
        <AccordionSummary expandIcon={<>i</>}>
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Alert
        severity="success"
        sx={{
          position: "fixed",
          left: showAlert ? "5rem" : "-100%",
          bottom: "5rem",
          transition: "all 0.3s ease",
        }}
      >
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </div>
  );
};

export default Login;
