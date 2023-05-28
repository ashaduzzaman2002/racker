import React from 'react';
import ArrowGroups from '../components/ArrowGroups';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ArrowGroups />

      <div className="homeContainer">
        <Link to={'/new-section'} className="homeBox">
          <p>+ New Section</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
