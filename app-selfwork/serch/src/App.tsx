import { useEffect, useState } from "react";
import { InputSearch } from "./components/InpotSearch";
import { Resultype } from "./dataType/type";
import { ListText } from "./components/ListText";

export function App() {
  const [search, setSearch] = useState("");
  const [datas, setData] = useState<Resultype[]>([]);

  const getData = async (search: string) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${search}`;
    const response = await fetch(url);

    const data = await response.json();

    const result: Resultype[] = data.query.search;

    setData(result);
  };

  useEffect(() => {
    if (search) {
      getData(search);
    }
  }, [search]);

  return (
    <div className="h-screen space-y-10 mb-8">
      <InputSearch setSearch={setSearch} />
      <ListText datas={datas} />
    </div>
  );
}
