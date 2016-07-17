import React from 'react'

export default (props) => {
    return (
        <div className="forecast">
            <h4 className="weather-date">{props.day} {' '} {props.date}</h4>
            <p className="weather-text">{props.text}</p>
            <h5>High &#8451;</h5>
            <p className="temp">{props.high}</p>
            <h5>Low &#8451;</h5>
            <p className="temp">{props.low}</p>
        </div>
    )
}