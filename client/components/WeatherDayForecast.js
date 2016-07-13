import React from 'react'

export default (props) => {
    return (
        <div className="forecast">
            <h4 className="weather-date">{props.day} {' '} {props.date}</h4>
            <h5>High</h5>
            <p>{props.high}</p>
            <h5>Low</h5>
            <p>{props.low}</p>
            <h6>{props.text}</h6>
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