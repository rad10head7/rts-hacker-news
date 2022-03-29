import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetHistoryItem } from "../store/actions";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const searchURL = "http://hn.algolia.com/api/v1/search?query=";

  const getInfo = () => {
    console.log("Getting info from API...");
    fetch(searchURL + query)
      .then((res) => res.json())
      .then((data) => setSearchResults(data.hits))
      .catch((e) => {
        console.log({ error: e });
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query && query.length > 0) {
      getInfo();
      dispatch(SetHistoryItem(query));
    }
    setQuery("");
  };

  const results = React.Children.toArray(
    searchResults.map((item, key) => (
      <li className="result-item" key={key}>
        {item.title}
      </li>
    ))
  );

  return (
    <div className="main">
      <h3 className="main-header">
        Type in Your Query and Press Search to Both Search the API and Store in
        State History
      </h3>
      <form className="search-form-container">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for..."
          value={query}
        />
        <button
          className="button"
          type="submit"
          aria-label="Search"
          onClick={handleSearch}
        >
          Search
        </button>
        <hr />
        <div className="results-list">
          <ul>{results}</ul>
        </div>
      </form>
    </div>
  );
}

export default Search;
