import React, { useState } from 'react';
import ArrowGroups from '../components/ArrowGroups';
import '../styles/AddHand.css';
import SendBtn from '../assets/images/send.svg'
import rulesImg from '../assets/images/rules.svg';

const AddHand = () => {
  const [hand, setHand] = useState(null)
  return (
    <div>
      <ArrowGroups />

      <div className="addHandContainer">

        <div className='rules-container'>
        <div className="rules-outer">
            <div className="rules-head">
              <img src={rulesImg} alt="" />
              <p className='rules-head-text'>Rules</p>
            </div>

            <RulesCard text='May occasionally generate incorrect information' />
              <RulesCard text='May occasionally produce harmful instructions or biased content' />
              <RulesCard text='Limited knowledge of world and events after 2021' />
          </div>

          <div className="rules-outer">
            <div className="rules-head">
              <img src={rulesImg} alt="" />
              <p className='rules-head-text'>Rules</p>
            </div>

            <RulesCard text='May occasionally generate incorrect information' />
              <RulesCard text='May occasionally produce harmful instructions or biased content' />
              <RulesCard text='Limited knowledge of world and events after 2021' />
          </div>
        </div>
        <form action="">
            <div className="chat-container">
              <input
                type="text"
                onChange={(e) => setHand(e.target.value)}
                placeholder='Tell me your hand'
                value={hand}
              />
              <img src={SendBtn} />
            </div>
        </form>
      </div>
    </div>
  );
};


const RulesCard = ({text}) => {
  return (
    <div className='rules-card'>
      <p>{text}</p>
    </div>
  )
}
export default AddHand;
