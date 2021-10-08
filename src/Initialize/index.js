import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  // getJoke().then(console.warn);

  const [btnText, setBtnText] = useState('GET A JOKE');
  const [joke, setJoke] = useState({});
  console.warn(joke);
  const setButton = (text) => {
    setBtnText(text);
  };
  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setButton('GET PUNCHLINE');
    });
  };
  return (
    <div className="App">
      <h1>{ joke.setup }</h1>
      <h5>{ btnText !== 'GET PUNCHLINE' ? joke.punchline : '' }</h5>
      {btnText === 'GET A JOKE' || btnText === 'GET ANOTHER JOKE'
        ? (
          <button onClick={getAJoke} className="joke-btn" type="button">
            {btnText}
          </button>
        ) : (
          <button
            onClick={() => setButton('GET ANOTHER JOKE')}
            className="joke-btn"
            type="button"
          >
            {btnText}
          </button>
        )}
    </div>

  );
}

export default Initialize;
