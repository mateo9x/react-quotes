import { useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  const loadedComments = getAllComments(quoteId);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;

  if (loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  return (
    <section className={classes.comments}>
      <h2>Komentarze użytkowników</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Dodaj komentarz
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
