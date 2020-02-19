import React from "react";
import { FindPage } from "../FindPage/FindPage";

//need an componentDidMount function
function ProfilePage(props) {
  return (
    <div>
      Profile Page
      <p>{FindPage.state.dataResponse}</p>
    </div>
  );
}

export default ProfilePage;
