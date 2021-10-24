import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-color: #EC0150;
    color: white;
    padding: 10px 20px;

    .player-name {
        display: flex;

        p {
            font-size: 1.5em;
            margin: 0.25em 0;;

            &:last-child {
                font-size: 1.2em;
                font-weight: 300;
                margin-bottom: 0.75em;
            }
        }
    }

    .badge {
        background-color: white;
        background-image: url('../../images/badges_sprite.png');
        background-repeat: no-repeat;
        border-radius: 50%;
        height: 100px;
        left: 0;
        margin: auto;
        position: absolute;
        right: -200px;
        top: 250px;
        width: 100px;

        &-spurs {
            background-position: 45.4% 100%;
        }

        &-leicester {
            background-position: 0 0;
        }

        &-manutd {
            background-position: 54.5% 79.98%;
        }

        &-mancity {
            background-position: 72.75% 70%;
        }

        &-arsenal {
            background-position: 9.1% 9.7%;
        }
    }
`;

const Stats = styled.div`
    background-color: #DFDFDF;
    box-shadow: 0px 0px 5px #5a5a5a;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
    padding: 10px 10px;

    p {
        color: #440151;
        font-size: 1.2em;
        font-weight: 300;
        margin: 0;

        &:last-child {
            font-weight: 600;
        }
    }
`;

const calcGoalsPerMatch = (stats) => {
    const goals = stats.find(stat => stat.name === 'goals');
    const appearances = stats.find(stat => stat.name === 'appearances');
    return (goals.value / appearances.value).toFixed(2)
}

const calcPassesPerMin = (stats) => {
    const forwardPass = stats.find(stat => stat.name === 'fwd_pass');
    const backwardPass = stats.find(stat => stat.name === 'backward_pass');
    const minsPlayed = stats.find(stat => stat.name === 'mins_played');
    return ((forwardPass.value + backwardPass.value) / minsPlayed.value).toFixed(2)
}

const getStats = (stats, key) => {
    const getData = stats.find(stat => stat.name === key);
    return getData ? getData.value : '0'
}

const getPosition = (position) => {
    switch (position) {
        case 'D':
            return 'Defender'
        case 'M':
            return 'Midfielder'
        case 'F':
            return 'Attacker'
        default:
            return 'N/A'
    }
}

const stringify = (string) => {
  return string.toLowerCase().split(' ').join('');
}

const PlayerStats = ({ name, stats, position, team }) => {
    return (
        <StyledWrapper>
            <div className="player-name">
                <div>
                    <p>{`${name.first} ${name.last}`}</p>
                    <p>{getPosition(position)}</p>
                </div>
                <div className={`badge badge-${stringify(team)}`}></div>
            </div>
            <div className="statswrapper">
                <Stats>
                    <p>Appearances</p>
                    <p>{getStats(stats, 'appearances')}</p>
                </Stats>
                <Stats>
                    <p>Goals</p>
                    <p>{getStats(stats, 'goals')}</p>
                </Stats>
                <Stats>
                    <p>Assists</p>
                    <p>{getStats(stats, 'goal_assist')}</p>
                </Stats>
                <Stats>
                    <p>Goals per match</p>
                    <p>{calcGoalsPerMatch(stats)}</p>
                </Stats>
                <Stats>
                    <p>Passes per minute</p>
                    <p>{calcPassesPerMin(stats)}</p>
                </Stats>
            </div>
        </StyledWrapper>
    )
}

export default PlayerStats
