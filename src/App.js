import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import CityComponents from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent';

const API_KEY = '3e735c157f15b23efea4be9fefe666b9';
const Container = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 380px;
    align-items: center;
    box-shadow: 0px 3px 6px 0 #555;
    border-radius: 4px;
    padding: 20px 10px;
    background: white;
    font-family: 'Roboto', sans-serif;
`;

const Applabel = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

function App() {
    const [weather, setweather] = useState();
    const [city, setcity] = useState();
    console.log(weather);
    const fetchapi = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        setweather(response.data);
    };
    return (
        <Container>
            <Applabel>React Wheather App</Applabel>
            {weather ? (
                <WeatherComponent weather={weather} />
            ) : (
                <CityComponents setcity={setcity} fetchapi={fetchapi} />
            )}
        </Container>
    );
}

export default App;
