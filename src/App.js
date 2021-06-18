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
    const response = await request.json();

    if (response) {
      setData(response);
      setDisplayFind(false);
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
