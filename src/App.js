import React from "react";
import "./App.css";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { FindPage } from "./components/FindPage/FindPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFind: true,
      dataResponse: {}
    };
  }

  handleFind(event, input) {
    if (event.key === "Enter") {
      const searchURL = `https://api.github.com/users/${input}`;
      fetch(searchURL)
        .then(response => {
          if (response.status !== 200) {
            this.setState({
              value: "Profile Doesnt Exist"
            });
            return;
          } else {
            response.json().then(data => {
              this.setState({
                dataResponse: data
              });
            });
          }
        })
        .catch(() => {
          return;
        });
      setTimeout(() => {
        console.log(this.state.dataResponse);
      }, 2000);

      this.setState({
        displayFind: !this.state.displayFind
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.displayFind ? (
          <FindPage keyPressed={this.handleFind} />
        ) : (
          <ProfilePage />
        )}
      </div>
    );
  }
}

export default App;
