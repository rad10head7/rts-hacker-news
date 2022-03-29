import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClearAllHistory } from "../store/actions";

function History() {
  const [historyResults, setHistoryResults] = useState([]);
  const [resultQuery, setResultQuery] = useState("");
  const history = useSelector((state) => state.history);
  const { list } = history;
  const dispatch = useDispatch();

  const searchURL = "http://hn.algolia.com/api/v1/search?query=";

  const searchItem = useCallback(() => {
    console.log("Getting info from API...");
    fetch(searchURL + resultQuery)
      .then((res) => res.json())
      .then((data) => setHistoryResults(data.hits))
      .catch((e) => {
        console.log({ error: e });
      });
  }, [resultQuery]);

  const handleClick = (e) => {
    setResultQuery(e.target.id);
  };

  const handleClear = () => {
    dispatch(ClearAllHistory());
    setHistoryResults([]);
  };

  useEffect(() => {
    if (resultQuery && resultQuery.length > 1) {
      searchItem();
    }
  }, [resultQuery, searchItem]);

  const historyList = React.Children.toArray(
    list.map((item, key) => (
      <li
        className="history-item"
        key={key}
        id={item.text}
        onClick={handleClick}
      >
        {item.text}
      </li>
    ))
  );

  const resultsList = React.Children.toArray(
    historyResults.map((item, key) => (
      <li className="result-item" key={key}>
        {item.title}
      </li>
    ))
  );

  return (
    <div className="main">
      <div className="history-header">
        <h3 className="main-header">
          Click on a History Item to See the Search Results
        </h3>
        <button
          className="button"
          aria-label="Clear History"
          onClick={handleClear}
        >
          Clear History
        </button>
      </div>
      <ul className="history-list">{historyList}</ul>
      <hr />
      <ul className="results-list">{resultsList}</ul>
    </div>
  );
}

export default History;
