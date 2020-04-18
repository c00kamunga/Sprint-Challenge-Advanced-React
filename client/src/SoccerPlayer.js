import React from "react";

function SoccerPlayer(props) {
  return (
    <div>
      <h1>Soccer Players Ranked By Number Of Searches</h1>
      {soccerPlayersData.map((player, index) => {
          return (
              <h3 key={index}>
                  {index + 1} - {player.name}<br/>
                  {player.country}<br/>
                  searches: {player.searches}
              </h3>
          )
      })}

    </div>
  );
}

export default SoccerPlayer;
