import React, { useEffect } from "react";
import SoccerPlayers from "./SoccerPlayers";
import { useLocalStorage } from "./customHook";
import axios from 'axios';

function App() {
  const [data, setData] = useLocalStorage("soccerKey", false);

  useEffect(() => {
    if (data) {
      console.log("data in localStorage");
    } else {
      axios
        .get("http://localhost:5000/api/players")
        .then(result => {
          console.log(result);
          setData(result.data)
        })
        .catch(error => {
          console.log("error:", error);
        });
    }
  }, []);

  return <SoccerPlayers data={data} />;
}

export default App;
