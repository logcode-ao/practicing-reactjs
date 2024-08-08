import { useState } from "react";
import { PostType } from "../App";

type FormProps = {
  setData: React.Dispatch<React.SetStateAction<PostType[]>>;
};

export function Form(props: FormProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.setData((prev) => [...prev, { title, desc }]);
      }}
    >
      <input
        type="text"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        name="title"
        value={title}
      />
      <textarea
        name="desc"
        id="desc"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      ></textarea>

      <button type="submit">Postar</button>
    </form>
  );
}
