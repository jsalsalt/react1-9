import React from "react";

const Form = (props) => {
    const { title, author, isbn, setTitle, setAuthor, setIbsn, currentBookId, handleSubmit, handleCancel } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
                required/>
            <label>Author</label>
            <input type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <label>ISBN</label>
            <input type="text"
                required
                value={isbn}
                onChange={(e) => setIbsn(e.target.value)}
            />
            <button tabIndex="0" type="submit">{currentBookId !== null ? "Update" : "Add"}</button>
            {currentBookId !== null && <button onClick={handleCancel}>Cancel</button>}
        </form>
    );
}

export default Form;