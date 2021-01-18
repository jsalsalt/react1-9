import React from "react";

const TableRow = ({ cell, settings, removeBook, editBook}) => {
    
    return (
        <div className="tableField">
            {cell}
            {settings && (<>
                <i className="far fa-edit" onClick={editBook}></i>
                <i className="far fa-trash-alt" onClick={removeBook}></i>
            </>)}
        </div>
    );
};

export default TableRow;