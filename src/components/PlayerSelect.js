import React from 'react';
import styled from "styled-components";


const Select = styled.div`
    margin-bottom: 30px;
    width: 100%;

    select {
        appearance: none;
        background-color: #DFDFDF;
        border: none;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 1.3em;
        font-weight: 300;
        padding: 10px;
        width: 100%;
    }

    &::before {
    border-style: solid;
    border-width: 0.1rem 0.1rem 0 0;
    content: '';
    display: inline-block;
    height: 10px;
    left: 0;
    margin: auto;
    position: absolute;
    right: -285px;
    top: 20px;
    transform: rotate(135deg);
    vertical-align: top;
    width: 10px;
  }
`;

const PlayerSelect = ({ names, onSelect }) => {
    return (
        <Select>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value="">Select a player...</option>
                {names.map((name) => {
                    const fullname = `${name.first} ${name.last}`
                    return (<option key={name.id} value={name.id}>{fullname}</option>)
                })}
            </select>
        </Select>
    )
}

export default PlayerSelect;