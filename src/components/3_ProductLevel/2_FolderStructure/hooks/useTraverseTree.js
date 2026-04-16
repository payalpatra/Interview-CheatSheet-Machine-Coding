import { useState } from "react";

const useTraverseTree = (explorer) => {
  const [explorerData, setExplorerData] = useState(explorer);

  // Insert a folder or File
  function insertNode(parentId, value, isFolder) {
    // create a new Id
    const newId = Date.now();
    // Create a new file or folder
    const newNode = {
      id: newId,
      parentId,
      value,
      isFolder,
      children: [],
    };

    // Set the explorer Data with update valye
    setExplorerData((prev) => {
      const updatedData = {
        ...prev, // get the previous values of the data
        [newId]: newNode, // Add the new Data
        [parentId]: {
          // Add new node to the children of the parentId
          ...prev[parentId], // Spread the previous values of the parent
          children: [...prev[parentId].children, newId], // spread the prev values of the children of the and then the new id
        },
      };
      return updatedData;
    });
  }

  function deleteNode(folderId) {
    const parentId = explorerData[folderId].parentId;
    setExplorerData((prev) => {
      const updatedData = {
        ...prev, // get the previous data
        [parentId]: {
          ...prev[parentId],
          children: prev[parentId].children.filter(childId !== folderId),
        },
      };
      delete explorerData[folderId];
      return updatedData;
    });
  }

  function updateNode() {}

  return { explorerData, insertNode, deleteNode, updateNode };
};

export default useTraverseTree;
