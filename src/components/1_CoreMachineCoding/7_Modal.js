import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  // useEffect(() => {
  //   const handleEsc = (e) => {
  //     if (e.key === "Escape") onClose();
  //   };

  //   document.addEventListener("keydown", handleEsc);
  //   return () => document.removeEventListener("keydown", handleEsc);
  // }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="backdrop"
      style={{
        marginTop: "20px",
        backgroundColor: "rgba(1, 1, 1, 0.1)",
        padding: "5px",
        border: "0px solid black",
        boxShadow: "5px 5px #888888",
        borderRadius: "10PX",
        color: "black",
      }}
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {!open ? (
        <button onClick={() => setOpen(true)}>Open</button>
      ) : (
        <button onClick={() => setOpen(false)}>close</button>
      )}

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat
          labore neque a magnam, nihil fuga blanditiis fugit molestias illo
          minus laborum consequatur quisquam optio perspiciatis explicabo?
          Nihil, autem optio!
        </p>
      </Modal>
    </>
  );
}
