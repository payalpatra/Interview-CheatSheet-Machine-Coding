import React, { useState } from "react";

const Accordion = ({}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    // Collapse if clicking the active item, otherwise open the clicked item
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const items = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div onClick={() => toggleItem(index)} style={{ cursor: "pointer" }}>
            {item.title}
          </div>
          {activeIndex === index && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
