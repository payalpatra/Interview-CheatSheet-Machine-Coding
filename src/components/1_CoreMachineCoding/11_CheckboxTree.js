import React, { useState } from "react";
// import data from "./data.json";

function App() {
  const data = [
    { id: 0, label: "All", checked: false },
    { id: 1, label: "React", checked: false },
    { id: 2, label: "Javascript", checked: true },
    { id: 3, label: "Redux", checked: false },
    { id: 4, label: "Typescript", checked: false },
  ];

  const [checkboxes, setCheckboxes] = useState(data);

  const handleChange = (id) => {
    let updated;

    if (id === 0) {
      // Toggle all
      const allChecked = checkboxes.every((item) => item.checked); // current state
      updated = checkboxes.map((item) => ({
        ...item,
        checked: !allChecked,
      }));
    } else {
      // Toggle single checkbox
      updated = checkboxes.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );

      // Check if all (except "All") are checked
      const allChecked = updated
        .filter((item) => item.id !== 0)
        .every((item) => item.checked);

      updated = updated.map((item) =>
        item.id === 0 ? { ...item, checked: allChecked } : item
      );
    }

    setCheckboxes(updated);
  };

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            style={{ cursor: "pointer" }}
            onChange={() => handleChange(checkbox.id)}
          />
          {checkbox.label}
        </div>
      ))}
    </div>
  );
}

export default App;
