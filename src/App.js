import React, { useState } from "react";
import Card from "./Card";
import './App.css';

const App = () => {
  let startup = [
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" }
  ];
  const [images, setImages] = useState(startup);

  const addImg = () => {
    setImages([...images, {
      url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
    }]);
  };

  const removeImg = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <section className="hero">
      <div className="cardContainer">
        <Card
          images={images}></Card>
      </div>
      <div className="btnContainer">
        <button onClick={addImg}>Add</button>
        <button onClick={removeImg}>Remove</button>
      </div>
    </section>
  );
}

export default App;
