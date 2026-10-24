// import axios from "axios";
// import { useEffect, useState } from "react";
// import { getData } from "./utils";

// function App() {
//   const [productsData, setProductsData] = useState([]);

//   // const getAllProducts = async () => {
//   //   try {
//   //     const response = await axios.get("https://fakestoreapi.com/products");
//   //     const data = await response.data;

//   //     setProductsData(data);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   useEffect(() => {
//     // getAllProducts();

//     getData("https://fakestoreapi.com/products", setProductsData);
//   }, []);

//   return (
//     <main className="flex flex-wrap gap-2 p-4">
//       {productsData?.length ? (
//         productsData?.map((ele) => (
//           <div className="w-60 h-96 p-1 border rounded-md">
//             <div className="h-72 w-full">
//               <img
//                 className="w-full h-full object-contain"
//                 src={ele?.image}
//                 alt={ele?.title}
//               />
//             </div>
//             <div className="border-t mt-2 p-2">
//               <h1 className="text-sm">{`${ele?.title?.slice(0, 20)}...`}</h1>
//               <p className="text-md font-semibold mt-2">{`$${ele?.price}`}</p>
//             </div>
//           </div>
//         ))
//       ) : (
//         <>Fetching data ....</>
//       )}
//     </main>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
