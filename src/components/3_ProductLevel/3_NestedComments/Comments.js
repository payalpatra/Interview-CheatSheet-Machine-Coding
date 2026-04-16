import React from "react";
import CommentBox from "./components/CommentBox";
import commentsData from "./commentsData.json";
import useComments from "./hooks/useComments";

function Comments() {
  const { comments, addComment, deleteComment, editComment } =
    useComments(commentsData);

  if (Object.keys(comments).length === 0) {
    return <h1>No Comments to show</h1>;
  }
  return (
    <div className="App">
      <CommentBox
        comment={comments[1]}
        allComments={comments}
        addComment={addComment}
        deleteComment={deleteComment}
        editComment={editComment}
      />
    </div>
  );
}

export default Comments;
