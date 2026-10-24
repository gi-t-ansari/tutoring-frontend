import React, { useEffect, useState } from "react";
import { getData } from "../../utils";
import { useDebounce } from "../../hook";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const debouncedSearchedTerm = useDebounce(searchedTerm, 500);

  //   // const getAllProducts = async () => {
  //   //   try {
  //   //     const response = await axios.get("https://fakestoreapi.com/products");
  //   //     const data = await response.data;

  //   //     setProductsData(data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // };

  useEffect(() => {
    // getAllProducts();

    getData("https://fakestoreapi.com/products", setProductsData);
  }, []);

  useEffect(() => {
    console.log(searchedTerm);
  }, [debouncedSearchedTerm]);

  return (
    <main className="flex flex-wrap gap-2 p-4">
      <div className="w-96 h-10 border rounded-sm">
        <input
          className="w-full h-full border-none px-3"
          type="search"
          placeholder="Search product"
          onChange={(e) => setSearchedTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2 p-4">
        {productsData?.length ? (
          productsData?.map((ele) => (
            <div className="w-60 h-96 p-1 border rounded-md">
              <div className="h-72 w-full">
                <img
                  className="w-full h-full object-contain"
                  src={ele?.image}
                  alt={ele?.title}
                />
              </div>
              <div className="border-t mt-2 p-2">
                <h1 className="text-sm">{`${ele?.title?.slice(0, 20)}...`}</h1>
                <p className="text-md font-semibold mt-2">{`$${ele?.price}`}</p>
              </div>
            </div>
          ))
        ) : (
          <>Fetching products data ....</>
        )}
      </div>
    </main>
  );
};

export default Products;
