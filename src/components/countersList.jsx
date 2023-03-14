import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 4, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 2, name: "Набор минималиста" },
  ];
  const [counts, setCounts] = useState(initialState);

  const handleDelete = (id) => {
    setCounts(counts.filter((count) => count.id !== id));
  };

  const handleIncrement = (id) => {
    setCounts(
      counts.map((count) => {
        if (count.id === id) {
          count.value += 1;
        }
        return count;
      })
    );
  };
  const handleDecrement = (id) => {
    setCounts(
      counts.map((count) => {
        if (count.id === id) {
          count.value -= 1;
        }
        return count;
      })
    );
  };

  return (
    <div className="fs-4 my-3 mx-4">
      {counts.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default CountersList;
