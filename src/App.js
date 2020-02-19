import React, { useState } from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage/ProfilePage';
import FindPage from './components/FindPage/FindPage';

const App = () => {
  const [displayFind, setDisplayFind] = useState(true);
  const [input, setInput] = useState('haney2121');
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleFind = () => {
    setDisplayFind(!displayFind);
    setInput('Search Github Profile');
  };

  const handleFind = async () => {
    setLoading(true);
    const searchURL = `https://api.github.com/users/${input}`;
    let data = await fetch(searchURL);
    // console.log('data', data);
    if (data.status !== 200) {
      setError("Profile Doesn't Exist");
    }
    let response = await data.json();
    // console.log('response', response);
    setData(response);
    if (response) {
      setDisplayFind(false);
      setLoading(false);
    }
  };

  const handleSearch = value => {
    setInput(value);
  };

  return (
    <>
      {error && <p>{error}</p>}

      {displayFind ? (
        <FindPage
          value={input}
          keyPressed={handleFind}
          handleSearch={handleSearch}
        />
      ) : (
        <ProfilePage data={data} loading={loading} toggleFind={toggleFind} />
      )}
    </>
  );
};

export default App;
