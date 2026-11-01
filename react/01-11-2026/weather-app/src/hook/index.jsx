import { useEffect, useState } from "react";

export const useDebounce = (searchedTerm, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchedTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchedTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchedTerm, delay]);

  return debouncedValue;
};
