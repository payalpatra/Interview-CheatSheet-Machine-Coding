import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ onSelect, placeholder = "Select..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    // onSelect && onSelect(option);
  };
  const options = ["Apple", "Banana", "Orange"];

  return (
    <div ref={dropdownRef} style={{ position: "relative", width: "200px" }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {selected ? selected : placeholder}
      </button>
      <style>
        {`
          .dropdown-item {
            padding: 10px;
            cursor: pointer;
          }

          .dropdown-item:hover {
            background-color: lightGrey;
          }
        `}
      </style>
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            width: "100%",
            border: "1px solid #ccc",
            background: "#fff",
            listStyle: "none",
            padding: 0,
            margin: 0,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
