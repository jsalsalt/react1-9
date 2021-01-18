import React from "react";
import TableRow from "./TableRow";

const Table = ({books, removeBook, editBook}) => {
    return (
        <div className="table">
            <div className="tableHeading">
                <TableRow cell="Title"></TableRow>
                <TableRow cell="Author"></TableRow>
                <TableRow cell="ISNB"></TableRow>
                <TableRow cell="Settings"></TableRow>
                
            </div>
            {books.map(book => (
                <div key={book.bookId} className="tableRow">
                    <TableRow cell={book.bookTitle}></TableRow>
                    <TableRow cell={book.bookAuthor}></TableRow>
                    <TableRow cell={book.bookIsbn}></TableRow>
                    <TableRow settings
                        removeBook={() => removeBook(book.bookId)}
                        editBook={()=>editBook(book)}></TableRow>
                </div>
            ))}
        </div>
    );
}

export default Table;