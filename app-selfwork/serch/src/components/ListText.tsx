import { Resultype } from "../dataType/type";
import { TextResult } from "./Text";

interface ListTextProps {
  datas: Resultype[];
}

export function ListText({ datas }: ListTextProps) {
  return (
    <div className="space-y-2 max-w-2xl mx-auto">
      {datas.map((data) => (
        <TextResult
          key={data.title}
          snippet={data.snippet}
          title={data.title}
        />
      ))}
    </div>
  );
}
