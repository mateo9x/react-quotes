import React, {useRef} from "react";
import {addComment} from "../../lib/api";
import classes from "./NewCommentForm.module.css";
import {useHistory} from "react-router-dom";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();
    const authorRef = useRef();
    let history = useHistory();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredText = commentTextRef.current.value;
        const enteredAuthor = authorRef.current.value;

        if (enteredText && enteredAuthor) {
            const response = addComment({quoteId: props.quoteId, author: enteredAuthor, text: enteredText});
            if (response.status === 'OK') {
                history.push(`/quotes`, {state: {toast: 'Pomyślnie dodano komentarz!'}});
            }
        }
    };
    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Twój komentarz</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Autor</label>
                <input id="author" ref={authorRef}></input>
            </div>
            <div className={classes.actions}>
                <button className="btn">Dodaj komentarz</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
