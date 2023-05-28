import React from 'react';
import ArrowGroups from '../components/ArrowGroups';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ArrowGroups />

      <div className="homeContainer">
        <Link to={'/new-session'} className="homeBox">
          <p>+ New Session</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
