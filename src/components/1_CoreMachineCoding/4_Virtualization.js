// import React, { useState } from "react";

// const ITEM_HEIGHT = 50;
// const CONTAINER_HEIGHT = 400;
// const TOTAL_ITEMS = 1000;

// function Virtualization() {
//   const items = Array.from({ length: TOTAL_ITEMS }, (_, i) => `Item ${i + 1}`);
//   const [scrollTop, setScrollTop] = useState(0);

//   const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
//   const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);
//   const endIndex = startIndex + visibleCount;

//   const visibleItems = items.slice(startIndex, endIndex);

//   const handleScroll = (e) => {
//     setScrollTop(e.currentTarget.scrollTop);
//   };

//   return (
//     <div
//       style={{
//         height: CONTAINER_HEIGHT,
//         overflowY: "auto",
//         border: "1px solid #ccc",
//         marginTop: "100px",
//       }}
//       onScroll={handleScroll}
//     >
//       <div style={{ height: TOTAL_ITEMS * ITEM_HEIGHT, position: "relative" }}>
//         {visibleItems.map((item, i) => {
//           const index = startIndex + i;
//           const id = new Date();

//           return (
//             <div
//               key={id}
//               style={{
//                 position: "absolute",
//                 top: index * ITEM_HEIGHT,
//                 height: ITEM_HEIGHT,
//                 width: "100%",
//                 padding: "10px",
//                 borderBottom: "1px solid #eee",
//                 boxSizing: "border-box",
//               }}
//             >
//               {item}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Virtualization;

import React from "react";
import { List } from "react-virtualized";
// import "react-virtualized/styles.css";

const list = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

function rowRenderer({ key, index, style }) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

export default function App() {
  return (
    <List
      width={400}
      height={300}
      rowCount={list.length}
      rowHeight={40}
      rowRenderer={rowRenderer}
    />
  );
}
