import React, { Component } from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      soccerPlayersData: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then((result) => {
        console.log(result);
        this.setState({
          soccerPlayersData: result.data,
        });
      })
      .catch((error) => {
        this.setState({
          soccerPlayersData: this.props.data,
        });
        console.log("error:", error);
      });
  }

  render() {
    return(
      <>
      </>
    )
  }
}


export default App;