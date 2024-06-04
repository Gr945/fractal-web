import { useState } from "react";
import Table from "./Components/Table/Table";
import Form from "./Components/Form/Form";
import { DataType } from "./types";
import './App.css'

function App() {
  const [data, getData] = useState<DataType | undefined>();

  return (
    <div className="app">
      <h2>Тестовое задание</h2>
      <Form setData={getData} />
      {data && <Table data={data} />}
    </div>
  );
}

export default App;
