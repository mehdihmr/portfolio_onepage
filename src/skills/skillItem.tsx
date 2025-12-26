type Data = {
  title: string;
  items: string[];
  color: string;
  symbol: string;
};

type SkillItemProps = {
  data: Data;
};

export default function SkillItem({ data }: SkillItemProps) {
  return (
    <div className="flex flex-col w-64 px-4 pt-12 rounded-xl font-primary border border-border justify-start bg-surface hover:scale-110 min-h-72">
      <span className={`material-symbols-outlined mx-auto p-2 text-accent rounded-xl bg-accent/10 w-1/2 text-center border border-accent`} style={{ fontSize: "30px" }}>
        {data.symbol}
      </span>
      <h2 className="text-accent text-lg mt-4 mb-2">{data.title.toUpperCase()}</h2>
      <ul className="list-disc ps-6 text-primary">
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
