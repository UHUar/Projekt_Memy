import React from "react";
import "../App.css";

export function Regular({ memes, setMemes }) {
  const handleYesVote = (title) => {
    setMemes(
      memes.map((meme) =>
        meme.title === title ? { ...meme, ups: meme.ups + 1 } : meme
      )
    );
  };

  const handleNoVote = (title) => {
    setMemes(
      memes.map((meme) =>
        meme.title === title ? { ...meme, downs: meme.downs + 1 } : meme
      )
    );
  };

  const filteredMemes = memes.filter((meme) => meme.ups - meme.downs <= 5);

  return (
    <div className="main-content">
      <div>
        <h1>Regular Memes</h1>
        {filteredMemes.map((meme, index) => (
          <div key={index} className="meme">
            <h2>{meme.title}</h2>
            <img src={meme.img} alt={meme.title} />
            <div className="buttons">
              <button onClick={() => handleYesVote(meme.title)}>Tak</button>
              <button onClick={() => handleNoVote(meme.title)}>Nie</button>
            </div>
            <div className="results">
              <p>Głosy na Tak: {meme.ups}</p>
              <p>Głosy na Nie: {meme.downs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Regular;
