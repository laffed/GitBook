import React from 'react';
import Atom from '../img/atom.png';
import './styles.css';

const FindPage = props => {
  const handleChange = event => {
    props.handleSearch(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.keyPressed();
  };

  return (
    <div className='find-wrapper'>
      <div className='search-logo'>
        <img src={Atom} alt='' srcSet='' />
      </div>
      <div className='search-text'>Find Your Profile</div>
      <div className='search-input'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='searchInput'
            name='username'
            spellCheck='false'
            autoComplete='off'
            value={props.value}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default FindPage;
