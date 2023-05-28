import React, { useState } from 'react';
import ArrowGroups from '../components/ArrowGroups';
import LeftArrow from '../assets/images/left-arrow.svg';
import RightArrow from '../assets/images/right-arrow.svg';
import On from '../assets/images/toggle-on-solid.svg'
import Off from '../assets/images/toggle-off-solid.svg'
import '../styles/NewSession.css';

const NewSession = () => {
  const [sessionName, setSessionName] = useState(null);
  const [blinds, setBlinds] = useState(null);
  const [playerName, setPlayerName] = useState(null);
  const [seatEmpty, setSeatEmpty] = useState(false)

  const hamdleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <ArrowGroups />

      <div className="new-section-container">
        <div>
          <h1>New Session</h1>
          <h3>Add Table Details</h3>

          <form onSubmit={hamdleSubmit} action="">
            <div>
              <label className="lableText" htmlFor="sessionName">
                Session Name
              </label>
              <div className="inputout session-input">
                <input
                  type="text"
                  value={sessionName}
                  onChange={(e) => setSessionName(e.target.value)}
                  id="sessionName"
                  placeholder="John's Private Games"
                />
              </div>
            </div>

            <div>
              <label className="lableText" htmlFor="blinds">
                Blinds
              </label>
              <div className="inputout session-input">
                <input
                  type="text"
                  value={blinds}
                  onChange={(e) => setBlinds(e.target.value)}
                  placeholder="25/50"
                  id="blinds"
                />
              </div>
            </div>

            <p className='playernameHeading'>Name the player sitting to your right</p>
            <div className="player-name-inputout">
              <img src={LeftArrow} alt="" />
              <div className="session-inputout2">
                <label className="lableText" htmlFor="playerName">
                  Player Name
                </label>
                <div className="inputout session-input2">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="John"
                    id="playerName"
                  />
                </div>
              </div>
              <img src={RightArrow} alt="" />
            </div>

            <div className='seat-empty'>
              <p>Seat Empty?</p>
              <img onClick={() => setSeatEmpty(!seatEmpty)} src={seatEmpty?On:Off} alt="" />
            </div>

            <div className='newSessionbtnContainer'>
              <button type='submit' className='newSessionBtn'>Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSession;
