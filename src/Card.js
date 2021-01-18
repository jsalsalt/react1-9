import React from "react";

const Card = ({images}) => {
    return (
        <>
            {images.map((i, idx) => (
                <div className="card"
                    key={idx}
                    style={{background: `url("${i.url}") no-repeat center/cover`}}>
                </div>
            ))}
        </>);
}

export default Card;