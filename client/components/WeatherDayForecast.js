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

// code
// :
// "11"
// date
// :
// "21 Jul 2016"
// day
// :
// "Thu"
// high
// :
// "6"
// low
// :
// "3"
// text
// :
// "Showers"

// export default (props) => {
//     return (
//         <div id="forecast">
//             <h4 class="weather-date">{props.day} {' '} {props.date}</h4>
//             <p>hello</p>
//             <p>{props.high}</p>
//             <p>{props.low}</p>
//             <p>{props.text}</p>
//         </div>
//     )
// }