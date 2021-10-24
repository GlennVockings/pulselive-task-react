import React from 'react';
import styled from "styled-components";
import PlayerSelect from "./components/PlayerSelect";
import PlayerCard from "./components/PlayerCard";
import { useState, useEffect } from 'react';

const StyledCard = styled.div`
  display: flex;
  font-family: sans-serif;
  flex-direction: column;
  margin: auto;
  max-width: 340px;
`;

function App() {
  const [names, setNames] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSeletectedPlayer] = useState([]);

  const getData = async () => {
    const res = await fetch('data/player-stats.json',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const setData = async () => {
      const data = await getData();
      const players = data.players;
      const names = []
      for (let i = 0; i < players.length; i++) {
        names.push({
          ...players[i].player.name,
          id: players[i].player.id
        })
      }
      setNames(names);
      setPlayers(players);
      setSeletectedPlayer([players[0]]);
    }

    setData()
  }, [])

  const handleSelectPlayer = (id) => {
    if(id === "") {
      return 
    }
    const filterId = parseInt(id)
    const selectedPlayer = players.filter((player) => {
      return player.player.id === filterId
    })
    setSeletectedPlayer([selectedPlayer[0]]);
  }

  return (
    <StyledCard>
      <PlayerSelect names={names} onSelect={handleSelectPlayer} />
      {selectedPlayer.map((player) => {
        return (
          <PlayerCard 
            key={player.player.id}
            id={player.player.id}
            name={player.player.name}
            team={player.player.currentTeam.shortName} 
            stats={player.stats}
            position={player.player.info.position} />
        )
      })}
      
    </StyledCard>
  );
}

export default App;
