import ItemList from "./item-list";

export default function Page() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <main>
        <h1 className="text-4xl font-bold p-2">Shopping List</h1>
        <ItemList></ItemList>
      </main>
    </div>
  );
}
