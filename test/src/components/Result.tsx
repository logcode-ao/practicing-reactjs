type ResultProps = {
  title: string;
  desc: string;
};

export function Result(props: ResultProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
