import React from 'react';
import styled from 'styled-components';

const Cityimg = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;
const Citylabel = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
    color: black;
`;
const Searchbox = styled.form`
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
    color: black;
    border: black solid 1px;
    border-radius: 3px;
    & input {
        outline: none;
        padding: 10px;
        border: none;
        font-weight: bold;
        font-size: 14px;
    }
    & button {
        padding: 10px;
        color: white;
        background-color: black;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;
function CityComponent({ setcity, fetchapi }) {
    return (
        <>
            <Cityimg src="/icons/perfect-day.svg" />
            <Citylabel>Find wheather of your city</Citylabel>
            <Searchbox onSubmit={fetchapi}>
                <input placeholder="city" onChange={(e) => setcity(e.target.value)} />
                <button type="submit">Search</button>
            </Searchbox>
        </>
    );
}

export default CityComponent;
