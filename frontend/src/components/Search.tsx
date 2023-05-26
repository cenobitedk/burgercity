import { useCallback, useState } from "react";
import "./Search.css";
import axios from "axios";
import { environment } from "../environment";

export default function Search() {
  const [term, setTerm] = useState("");

  const handleSearch = useCallback((term: string) => {
    axios
      .get(`${environment.BACKEND_URL}/search?q=${term}`)
      .then((response) => {
        console.debug(response);
      });
  }, []);

  return (
    <div className="searchbox">
      Search:
      <input
        type="search"
        className="searchbar"
        onChange={(event) => {
          setTerm(event.currentTarget.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleSearch(term);
          }
        }}
      />
    </div>
  );
}
