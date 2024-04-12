export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list.🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed all the items! you can go traveling now 🎉🎉🎉"
          : `👜 You have ${numItems} items on your packing list , and you already
        packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
