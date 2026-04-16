// import React, { useState, useEffect } from "react";

// function Slider() {
//   const items = Array.from({ length: 4 }, (_, index) => `item ${index}`);
//   const [index, setIndex] = useState(0);

//   const prevSlide = () =>
//     setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

//   const nextSlide = () =>
//     setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

//   // const nextSlide = () => {
//   //   setIndex((prev) => (prev + 1) % items.length);
//   // };

//   // const prevSlide = () => {
//   //   setIndex((prev) => (prev - 1 + items.length) % items.length);
//   // };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   return (
//     <div style={{ position: "relative", width: "300px", margin: "auto" }}>
//       <button
//         onClick={prevSlide}
//         style={{ position: "absolute", left: "0", top: "50%", zIndex: 1 }}
//       >
//         ⬅️
//       </button>

//       <div
//         style={{
//           height: "100px",
//           border: "1px solid black",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             transform: `translateX(-${index * 100}%)`,
//             transition: "transform 0.3s ease",
//           }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               style={{
//                 minWidth: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={nextSlide}
//         style={{ position: "absolute", right: "0", top: "50%", zIndex: 1 }}
//       >
//         ➡️
//       </button>

//       {/* Indicator Dots */}
//       {/* <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "10px",
//           gap: "8px",
//         }}
//       >
//         {items.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setIndex(i)}
//             style={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: index === i ? "black" : "lightgray",
//               cursor: "pointer",
//               display: "inline-block",
//             }}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Slider;
import { useState, useEffect } from "react";

export default function Slider() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [index, setIndex] = useState(0);

  const changeSlide = (step) => {
    setIndex((prev) => (prev + step + items.length) % items.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "300px", margin: "auto" }}>
      {/* Left Button */}
      <button
        onClick={() => changeSlide(-1)}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          // transform: "translateY(-50%)",
        }}
      >
        ⬅️
      </button>

      {/* Slider */}
      <div
        style={{
          overflow: "hidden",
          border: "1px solid black",
          height: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.3s ease",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                minWidth: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => changeSlide(1)}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          // transform: "translateY(-50%)",
        }}
      >
        ➡️
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: i === index ? "black" : "lightgray",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
