import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    setItems([...items, item]);
  }
  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handlePack(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAdd={handleAdd} />
      <PackingList
        items={items}
        handleRemove={handleRemove}
        handlePack={handlePack}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
