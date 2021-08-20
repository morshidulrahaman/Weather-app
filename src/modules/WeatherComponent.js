import React from 'react';
import styled from 'styled-components';

export const WeatherInfoIcons = {
    sunset: '/icons/temp.svg',
    sunrise: '/icons/temp.svg',
    humidity: '/icons/humidity.svg',
    wind: '/icons/wind.svg',
    pressure: '/icons/pressure.svg',
};

export const WeatherIcons = {
    '01d': '/icons/sunny.svg',
    '01n': '/icons/night.svg',
    '02d': '/icons/day.svg',
    '02n': '/icons/cloudy-night.svg',
    '03d': '/icons/cloudy.svg',
    '03n': '/icons/cloudy.svg',
    '04d': '/icons/perfect-day.svg',
    '04n': '/icons/cloudy-night.svg',
    '09d': '/icons/rain.svg',
    '09n': '/icons/rain-night.svg',
    '10d': '/icons/rain.svg',
    '10n': '/icons/rain-night.svg',
    '11d': '/icons/storm.svg',
    '11n': '/icons/storm.svg',
};
const Weatherconditon = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin: 30px auto;
`;
const Condition = styled.span`
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    font-size: 14px;
    align-items: center;
    & span {
        font-size: 28px;
        margin-right: 5px;
    }
`;
const Cityimg = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;
const Location = styled.div`
    font-size: 28px;
    font-weight: bold;
`;
const WehatherInfoLabel = styled.span`
    margin: 20px 25px 10px;
    text-transform: capitalize;
    text-align: start;
    width: 90%;
    font-weight: bold;
    font-size: 14px;
`;
const Weatherinfocontainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;
const Infocontainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const InfoLabel = styled.span`
 display: flex;
 flex-direction: column;
 font-size: 14px;
 margin: 15px;
 & span {
   font-size: 12px;
   text-transform: capitalize;
 `;
const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;
const Weatherinfocomponent = (props) => {
    const { name, value } = props;
    return (
        <>
            <Infocontainer>
                <InfoIcon src={WeatherInfoIcons[name]} />
                <InfoLabel>
                    {value}
                    <span>{name}</span>
                </InfoLabel>
            </Infocontainer>
        </>
    );
};

function WeatherComponent({ weather }) {
    const { name, main, sys, wind } = weather;
    const isDay = weather.weather[0].icon.includes('d');
    console.log(isDay);
    const getTime = (temp) =>
        `${new Date(temp * 1000).getHours()}:${new Date(temp * 1000).getMinutes()}`;
    return (
        <>
            <Weatherconditon>
                <Condition>
                    <span>{`${Math.floor(main.temp - 273)}°C`}</span>
                    {`|${weather.weather[0].description}`}
                </Condition>
                <Cityimg src={WeatherIcons[weather.weather[0].icon]} />
            </Weatherconditon>
            <Location>
                {name}, {sys.country}
            </Location>
            <WehatherInfoLabel>Weather Info</WehatherInfoLabel>
            <Weatherinfocontainer>
                <Weatherinfocomponent
                    value={`${getTime(sys[isDay ? 'sunset' : 'sunrise'])}`}
                    name={isDay ? 'sunset' : 'sunrise'}
                />
                <Weatherinfocomponent value={main.humidity} name="humidity" />
                <Weatherinfocomponent value={wind.speed} name="wind" />
                <Weatherinfocomponent value={main.pressure} name="pressure" />
            </Weatherinfocontainer>
        </>
    );
}

export default WeatherComponent;
