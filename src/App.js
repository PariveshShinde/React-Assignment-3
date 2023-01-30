import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import RadioButton from "./RadioButton";
import Table from "./Table";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("demo.json");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h1>React Asignment 3</h1>
        <RadioButton
          name="sorter"
          value="Name"
          data={data}
          setData={setData}
          flag={flag}
          setFlag={setFlag}
        />
        <RadioButton
          name="sorter"
          value="Age"
          data={data}
          setData={setData}
          flag={flag}
          setFlag={setFlag}
        />
      </div>
      <Table tableData={data} />
    </div>
  );
}

export default App;
