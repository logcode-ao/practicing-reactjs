type CardDescricacaoProps = {
  price: number;
  name: string;
};

export function CardDescricacao({ name, price }: CardDescricacaoProps) {
  return (
    <div
      className="mb-16 px-px
border-zinc-500 border-2 w-60 flex gap-1 h-12 bg-black/60 rounded-full items-center justify-center"
    >
      <p className="text-sm text-zinc-100 flex-1 w-[126px] truncate pl-4">
        {name}
      </p>
      <span className="font-semibold text-white bg-violet-500 rounded-full w-[83px] h-10 flex justify-center items-center">
        R${price}
      </span>
    </div>
  );
}
