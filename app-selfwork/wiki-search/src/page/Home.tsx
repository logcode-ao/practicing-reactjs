import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ResultList } from "../components/ResultList";
import { Resultype } from "../data/types";
import HeaderMenu from "../components/HeaderMenu";

export default function Home() {
  const [data, setData] = useState<Resultype[]>([]);
  const [search, setSearch] = useState("");

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
    <main className="min-h-screen">
      <div className="max-w-2xl min-h-96 mx-auto">
        <HeaderMenu />
        <div className="flex justify-around">
          <Header setSearch={setSearch} />
          <Button />
        </div>

        <ResultList data={data} />
      </div>
    </main>
  );
}
