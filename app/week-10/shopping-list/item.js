export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section
      className="m-5 bg-[#0f172a] p-3 w-1/4 cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </section>
  );
}
