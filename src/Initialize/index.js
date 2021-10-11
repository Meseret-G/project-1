/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import getJoke from '../api/data/jokeData';
// import JokeContainer from '../components/JokeContainer';

function Initialize() {
  const [btnText, setBtnText] = useState('');
  const [joke, setJoke] = useState({});
  // const [showPunchline, setShowPunchline] = useState(false);

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery, // I'm in here! - Trinity
      });

      setBtnText('Get Punchline');
    });
  };

  useEffect(() => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery, // I'm in here! - Trinity
      });

      setBtnText('Get Punchline');
    });
  }, []);

  return (
    <div className="App">
      <h1>{joke.setup}</h1>
      <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
      {!btnText ? 'Loading...' : btnText === 'Get Another Joke' ? (
        <button onClick={getAJoke} className="btn btn-success" type="button">
          {btnText}
        </button>
      ) : (
        <button
          onClick={() => setBtnText('Get Another Joke')}
          className="btn btn-success"
          type="button"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Initialize;
