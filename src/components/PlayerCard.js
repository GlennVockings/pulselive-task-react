import React from 'react';
import styled from "styled-components";
import PlayerStats from './PlayerStats';

const Card = styled.div`
    .img-wrapper {
        background-image: url('../../images/bg.png');
        background-repeat: no-repeat;
        background-position-x: 100%;
        display: flex;
        padding: 20px 15px 0 15px;
    }

    .player-img {
        width: 50%;
    }
`;

const PlayerCard = ({ name, id, team, stats, position }) => {
    return (
        <Card>
            <div className="img-wrapper">
                <img className="player-img" src={`/images/p${id}.png`} alt={`${name.first} ${name.last}`} />
            </div>
            <PlayerStats name={name} stats={stats} position={position} team={team} />
        </Card>
    )
}

export default PlayerCard
