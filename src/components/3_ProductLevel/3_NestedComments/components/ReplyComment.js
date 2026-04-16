import React, { useState } from "react";
import "./styles.css";

function ReplyComment({
  id,
  setShowreplyBox,
  addComment,
  setShowEdit,
  showEdit,
  editComment,
}) {
  const [reply, setReply] = useState("");
  const [editReply, setEditReply] = useState("");

  const handPostReply = () => {
    addComment(reply, id);
    setReply(!reply);
    setShowreplyBox(false);
  };

  const handEditReply = () => {
    if (editReply.length > 0) editComment(id, editReply);
    setShowEdit(false);
  };

  return showEdit ? (
    <div className="reply-form">
      <textarea
        className="reply-textarea"
        value={editReply}
        placeholder="Edit your reply here..."
        onChange={(e) => setEditReply(e.target.value)}
      ></textarea>
      <button onClick={handEditReply} className="post-reply-btn">
        Edit reply
      </button>
    </div>
  ) : (
    <div className="reply-form">
      <textarea
        className="reply-textarea"
        value={reply}
        placeholder="write your reply here..."
        onChange={(e) => setReply(e.target.value)}
      ></textarea>
      <button onClick={handPostReply} className="post-reply-btn">
        post reply
      </button>
    </div>
  );
}

export default ReplyComment;
