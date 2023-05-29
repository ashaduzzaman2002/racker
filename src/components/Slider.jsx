import React, { useRef, useState } from 'react';
import '../styles/SwipperSlider.css';
import { RulesCard } from '../screens/AddHand';
import rulesImg from '../assets/images/rules.svg';


const SwipeSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleSwipeStart = (e) => {
    const touch = e.changedTouches[0];
    setStartX(touch.clientX);
  };

  const handleSwipeEnd = (e) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const { offsetWidth } = sliderRef.current;

    if (deltaX < -50 && currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (deltaX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideWidth = 100 / 3; // Assuming there are 3 slides

  return (
    <div className="slider-wrapper">
      <div
        className="slider-container"
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
        ref={sliderRef}
      >
        <div className="slide" style={{ left: `${-currentIndex * slideWidth}%` }}>
          <div className="slide-content">
          <div className="rules-outer">
                <div className="rules-head">
                  <img src={rulesImg} alt="" />
                  <p className="rules-head-text">Rules</p>
                </div>

                <RulesCard text="May occasionally generate incorrect information" />
                <RulesCard text="May occasionally produce harmful instructions or biased content" />
                <RulesCard text="Limited knowledge of world and events after 2021" />
              </div>
          </div>
        </div>
        <div className="slide" style={{ left: `${-currentIndex * slideWidth}%` }}>
          <div className="slide-content">
            <input type="text" placeholder="Slide 2" />
          </div>
        </div>
        <div className="slide" style={{ left: `${-currentIndex * slideWidth}%` }}>
          <div className="slide-content">
            <input type="text" placeholder="Slide 3" />
          </div>
        </div>
      </div>
      <div className="indicator-container">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`indicator-button ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeSlider;
