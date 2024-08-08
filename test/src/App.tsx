import { useState } from "react";
import { Form } from "./components/Form";
import { Result } from "./components/Result";

export type PostType = {
  title: string;
  desc: string;
};

function App() {
  const [data, setData] = useState([
    {
      title: "",
      desc: "",
    },
  ]);
  return (
    <>
      <Form setData={setData} />

      {data.map((item) => (
        <Result key={item.title} title={item.title} desc={item.desc} />
      ))}
    </>
  );
}

export default App;
