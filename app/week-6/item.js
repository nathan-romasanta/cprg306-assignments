export default function Item(props) {
  return (
    <section className="m-5 bg-[#0f172a] p-3 w-1/4">
      <h2 className="text-2xl font-bold">{props.name}</h2>
      <p>
        Buy {props.quantity} in {props.category}
      </p>
    </section>
  );
}
