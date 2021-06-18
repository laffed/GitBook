import React, {useState} from "react";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import FindPage from "./components/FindPage/FindPage";
import "./App.css";

function App() {
  const [displayFind, setDisplayFind] = useState(true);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState({});

  const toggleFind = () => {
    setDisplayFind(!displayFind);
    setInput("");
  };

  const handleFind = async () => {
    setLoadingScreen(true);
    const searchURL = `https://api.github.com/users/${input}`;
    const request = await fetch(searchURL);
    if (request.status !== 200) {
      setInput("Profile Doesn't Exist");
      return;
    }
    const res = await request.json();

    if (res) {
      const newData = {
        avatar_url: res.avatar_url,
        name: res.name,
        html_url: res.html_url,
        login: res.login,
        bio: res.bio,
        create_at: res.create_at,
        public_repos: res.public_repos,
        followers: res.followers,
        following: res.following
      }
      setData(newData);
      setDisplayFind(false);
      console.log(res);
    }
  };

  const handleChange = value => {
    setInput(value);
  };

  const onFocus = () => {
    setInput("");
  };

  return (
    <div>
      {displayFind ? (
        <FindPage
          value={input}
          keyPressed={handleFind}
          handleChange={handleChange}
          onFocus={onFocus}
        />
      ) : (
        <ProfilePage
          data={data}
          loadingScreen={loadingScreen}
          toggleFind={toggleFind}
        />
      )}
    </div>
  );
};

export default App;
