import { useState } from "react";
import "./styles.css";

function Folder({
  explorer,
  explorerAll,
  handleInsertNode,
  handleDeleteNode,
  handleUpdateNode,
}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // do something
      // here explorer.id is the parent id under which we are trying to add a folder or file
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  const handleDeleteFolder = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  return explorer.isFolder ? (
    <div style={{ marginTop: 5 }}>
      <div className="folder" onClick={() => setExpand(!expand)}>
        <span>🗂️ {explorer?.value}</span>
        <div>
          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => handleNewFolder(e, true)}
          >
            Folder +
          </button>
          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => handleNewFolder(e, false)}
          >
            File +
          </button>
          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => handleDeleteFolder(e)}
          >
            Delete +
          </button>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
            <input
              className="inputContainer__input"
              type="text"
              autoFocus
              onKeyDown={(e) => onAddFolder(e)}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}
        {explorer.children.map((itemId) => (
          <Folder
            key={itemId}
            explorer={explorerAll[itemId]}
            explorerAll={explorerAll}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleUpdateNode={handleUpdateNode}
          />
        ))}
      </div>
    </div>
  ) : (
    <span>
      <span className="file">📄 {explorer.value}</span>
    </span>
  );
}

export default Folder;
