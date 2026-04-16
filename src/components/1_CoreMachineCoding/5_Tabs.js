import { useState } from "react";

export default function Tabs() {
  const tabs = [
    { id: 1, label: "Home", content: "Welcome to Home Tab" },
    { id: 2, label: "Profile", content: "This is Profile Tab" },
    { id: 3, label: "Settings", content: "Here are Settings" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "8px",
              background: activeTab === index ? "black" : "lightgray",
              color: activeTab === index ? "white" : "black",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>{tabs[activeTab].content}</div>
    </div>
  );
}
