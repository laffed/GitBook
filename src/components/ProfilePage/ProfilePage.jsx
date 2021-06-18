import React from "react";
import "../ProfilePage/styles.css";
import calendar from "../img/white-calendar-icon-png-4-transparent.png";

function ProfilePage(props) {
  if (props.data.length === 0) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <button id="btnRepos"></button>
            </li>
            <li>
              <button id="btnToFind" onClick={props.toggleFind}>
                Find
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main id="indexMain">
        <div className="profile-head">
          <div className="head-top">
            <div className="img-container">
              <img
                src={props.data.avatar_url}
                alt="Avatar"
                className="profile-img"
              />
            </div>
            <h2 id="userActual">{props.data.name}</h2>
            <a
              id="userHandle"
              href={props.data.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{props.data.login}
            </a>
            <h3 id="userBio">{props.data.bio}</h3>
            <div className="joined-date">
              <img src={calendar} alt="" />
              <p id="dateJoined" className="joined-date-text">
                {props.data.created_at}
              </p>
            </div>
            <div className="profile-stats">
              <div className="box">
                <p id="repos" className="stats-integer">
                  {props.data.public_repos}
                </p>
                <p className="stats-words">REPOS</p>
              </div>
              <div className="box">
                <p id="followers" className="stats-integer">
                  {props.data.followers}
                </p>
                <p className="stats-words">FOLLOWERS</p>
              </div>
              <div className="box">
                <p id="following" className="stats-integer">
                  {props.data.following}
                </p>
                <p className="stats-words">FOLLOWING</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
