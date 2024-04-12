import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleRemove,
  handlePack,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Item
            item={items}
            handleRemove={handleRemove}
            handlePack={handlePack}
            key={items.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="packed">Sort By Packed</option>
          <option value="description">Sort By Description</option>
        </select>
        {items.length > 0 ? (
          <button onClick={() => handleClear()}>Clear List</button>
        ) : (
          <button>Clear List</button>
        )}
      </div>
    </div>
  );
}
