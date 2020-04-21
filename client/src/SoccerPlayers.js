import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components';

const StyledCard = styled.div`
border: 3px solid black;
text-align: center;
padding: 1%;
width: 30%;
margin: 2rem auto;
`

const StyledHeader = styled.h1`
text-align: center;
font-size: 3rem;
`

class SoccerPlayers extends Component {
  constructor(props) {
    super();
    this.state = {
      soccerPlayersData: [],
    };
  }

  componentDidMount() {
    console.log(this.props)
    axios
      .get("http://localhost:5000/api/players")
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
    return (
      <>
        <div>
          <StyledHeader>Soccer Players Ranked by Number of Searches</StyledHeader>
          {this.state.soccerPlayersData.map((player, index) => {
            return (
              <StyledCard key={index}>
                {index + 1} - {player.name}
                <br />
                {player.country}
                <br /> searches: {player.searches}
              </StyledCard>
            );
          })}
        </div>
      </>
    );
  }
}

export default SoccerPlayers;
