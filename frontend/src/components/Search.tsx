import { useState } from "react";
import "./Search.css";

export default function Search() {
  const [term, setTerm] = useState("");

  return (
    <>
      Search: <input type="search" className="searchbar" />{" "}
    </>
  );
}
