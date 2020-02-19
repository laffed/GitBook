import React from "react";
import Atom from "../img/atom.png";
import "./styles.css";

class FindPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "enter github handle",
      dataResponse: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    // this.keyPressed = this.keyPressed.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleFocus(event) {
    this.setState({
      value: ""
    });
  }

  //   keyPressed(event) {
  //     if (event.key === "Enter") {
  //       const searchURL = `https://api.github.com/users/${this.state.value}`;
  //       fetch(searchURL)
  //         .then(response => {
  //           if (response.status !== 200) {
  //             this.setState({
  //               value: "Profile Doesnt Exist"
  //             });
  //             return;
  //           } else {
  //             response.json().then(data => {
  //               this.setState({
  //                 dataResponse: data
  //               });
  //             });
  //           }
  //         })
  //         .catch(() => {
  //           return;
  //         });
  //       setTimeout(() => {
  //         console.log(this.state.dataResponse);
  //       }, 2000);
  //   App.setState({
  //     displayFind: !this.state.displayFind
  //   });
  //     }
  //   }

  render() {
    return (
      <div className="find-wrapper">
        <div className="search-logo">
          <img src={Atom} alt="" srcSet="" />
        </div>
        <div className="search-text">Find Your Profile</div>
        <div className="search-input">
          <input
            id="searchInput"
            name="username"
            type="text"
            spellCheck="false"
            autoComplete="off"
            value={this.state.value}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            onKeyPress={event => this.props.keyPressed(event, this.state.value)}
          />
        </div>
      </div>
    );
  }
}

export { FindPage };
