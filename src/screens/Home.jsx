import React from 'react';
import ArrowGroups from '../components/ArrowGroups';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <ArrowGroups />

      <div className="homeContainer">
        <div className="homeBox">
          <p>+ New Section</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
