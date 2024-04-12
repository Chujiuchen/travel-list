import { useState } from "react";

export default function Form({ onHandleAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    // console.log(123123);
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (!description) return;
    onHandleAdd(newItem);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 👑 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()].map((i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
