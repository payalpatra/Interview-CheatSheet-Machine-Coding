import { useState } from "react";

export default function useComments(commentsData) {
  const [comments, setComments] = useState(commentsData);

  const addComment = (value, parentId) => {
    const newId = Date.now();
    const newComment = {
      id: newId,
      value,
      parentId,
      children: [],
    };

    setComments((prev) => {
      const updatedComments = {
        ...prev,
        [newId]: newComment,
        [parentId]: {
          ...prev[parentId],
          children: [...prev[parentId].children, newId],
        },
      };
      return updatedComments;
    });
  };

  const deleteComment = (id) => {
    const parentId = comments[id].parentId;

    setComments((prev) => {
      if (parentId == null) {
        return [];
      }
      const updatedComments = {
        ...prev,
        [parentId]: {
          ...prev[parentId],
          children: prev[parentId].children.filter((child) => child !== id),
        },
      };

      delete updatedComments[id];
      return updatedComments;
    });
  };

  const editComment = (id, newValue) => {
    setComments((prev) => {
      // guard (important for interviews)
      if (!prev[id]) return prev;
      const updatedComments = {
        ...prev,
        [id]: {
          ...prev[id],
          value: newValue,
        },
      };

      return updatedComments;
    });
  };

  return { comments, addComment, deleteComment, editComment };
}
