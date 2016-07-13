import React from 'react'

export default (props) => {
    return (
        <div id="weather-today">
            <div className="current-weather">
                <h4 className="weather-date">{props.day} {' '} {props.date}</h4>
                <p className="weather-text">{props.text}</p>
                <h5>High &#8451;</h5>
                <p className="temp">{props.high}</p>
                <h5>Low &#8451;</h5>
                <p className="temp">{props.low}</p>
            </div>
            <div className="current-weather">
                <h5>Wind</h5>
                <h6>Chill</h6>
                <p>{props.chill}</p>
                <h6>Direction</h6>
                <p>{props.direction}</p>
                <h6>Speed</h6>
                <p>{props.speed} km/h</p>
            </div>
            <div className="current-weather">
                <h5>Atmosphere</h5>
                <h6>Humidity</h6>
                <p>{props.humidity}</p>
                <h6>Visibility</h6>
                <p>{props.visibility}</p>
            </div>
            <div className="current-weather">
                <h5>Astronomy</h5>
                <h6>Sunrise</h6>
                <p>{props.sunrise}</p>
                <h6>Sunset</h6>
                <p>{props.sunset}</p>
            </div>
        </div>
    )
}
