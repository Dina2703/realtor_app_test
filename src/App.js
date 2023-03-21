import "./App.css";
import axios from "axios";
import { useState } from "react";
// import fetchData from "./utils/fetchData";

function App() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("./utils/fetchData", {
        params: { term },
      });
      const { data } = res;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>app</h1>
      <input type="text" onChange={(e) => setTerm(e.target.value)} />
      <button onClick={() => getSearchResults()}>search</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
