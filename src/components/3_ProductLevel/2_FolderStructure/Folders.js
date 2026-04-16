import { useState } from "react";
import folderData from "./folderData.json";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

export default function Folders() {
  const { explorerData, insertNode, deleteNode, updateNode } =
    useTraverseTree(folderData);

  return (
    <div className="App">
      <Folder
        explorer={explorerData[1]}
        explorerAll={explorerData}
        handleInsertNode={insertNode}
        handleDeleteNode={deleteNode}
        handleUpdateNode={updateNode}
      />
    </div>
  );
}

/*
--- created a dummy data
1. Render 1 level of JSON
2. render folder inside folder
3. showing & hiding input
4. Work on add Folder logic
5. Create custom hook to add folder and file
6. Call the insert node from app and folder
7. Apply depth first seach to add files and folder for the nested folders
*/
