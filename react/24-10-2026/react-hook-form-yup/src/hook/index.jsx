import { useEffect, useState } from "react";

export const useDebounce = (searchedTerm, delay) => {
  const [debouncedSearchedTerm, setDebouncedSearchedTerm] =
    useState(searchedTerm);

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedSearchedTerm(searchedTerm),
      delay,
    );

    return () => clearTimeout(timer);
  }, [searchedTerm, delay]);

  return debouncedSearchedTerm;
};
