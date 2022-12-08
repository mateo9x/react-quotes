import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
        <div >
            <span>Data: {props.date}</span>
            <span>Autor: {props.author}</span>
        </div>
    </li>
  );
};

export default CommentItem;
