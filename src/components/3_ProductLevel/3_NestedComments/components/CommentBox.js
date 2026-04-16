import React, { useEffect, useState } from "react";
import ReplyComment from "./ReplyComment";
import "./styles.css";

function CommentBox({
  comment,
  allComments,
  addComment,
  deleteComment,
  editComment,
}) {
  const [showReplyBox, setShowreplyBox] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    setShowreplyBox(!showReplyBox);
  };
  const onDelete = () => {
    deleteComment(comment.id);
  };
  const onEdit = () => {
    // editComment(comment.id);
    setShowEdit(!showEdit);
  };
  console.log("hi", editComment);
  return (
    <div className="comment-container">
      {/* Comment Box */}
      <div className="comment-header">
        <p className="comment-value">{comment.value}</p>
        <div className="comment-action">
          <button className="reply-btn" onClick={handleClick}>
            {showReplyBox ? "Cancel" : "Reply"}
          </button>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>
          <button className="reply-btn" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
      {/* Comment box */}
      {showReplyBox && (
        <ReplyComment
          showEdit={showEdit}
          setShowreplyBox={setShowreplyBox}
          addComment={addComment}
          id={comment.id}
        />
      )}

      {/* Comment box */}
      {showEdit && !showReplyBox && (
        <ReplyComment
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          editComment={editComment}
          id={comment.id}
        />
      )}

      <div className="nested-comments">
        {comment.children.map((childId) => {
          return (
            <CommentBox
              key={childId}
              comment={allComments[childId]}
              allComments={allComments}
              addComment={addComment}
              deleteComment={deleteComment}
              editComment={editComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentBox;
