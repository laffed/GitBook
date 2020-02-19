import React from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage/ProfilePage'
import { FindPage } from './components/FindPage/FindPage'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      displayFind: true
    }

  }

  handleFind() {
    this.setState(() => {
      return ({
        displayFind: !this.state.displayFind
      })
    })
  }

  render() {

    return (
      <div>
        {this.state.displayFind ? <FindPage onEnter={this.handleFind} /> : <ProfilePage />}
      </div>
    );
  }

}

export default App;
