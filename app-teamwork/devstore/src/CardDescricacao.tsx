export function CardDescricacao() {
  return (
    <div
      className="
border-zinc-500 border-2 w-60 flex gap-2 h-12 bg-black/60 rounded-full items-center justify-center"
    >
      <p className="text-sm text-zinc-100 w-[130px] truncate">
        Moletom Nener Stop Lerning
      </p>
      <span className="font-semibold text-white bg-violet-500 rounded-full w-[83px] h-10 flex justify-center items-center">
        R$123
      </span>
    </div>
  );
}
