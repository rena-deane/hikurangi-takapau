// import request from 'superagent'

// const INITIAL_STATE =   {
//                             title: '',
//                             forecast: '',
//                             sunrise: '',
//                             sunset: ''
//                         }

// const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22whakatane%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case REQUEST_FORECAST :
//     request.get(url)
//       .then((res) = > {
//         const result = response.body.query
//         const newState = Object.assign({}, state)
//         newstate = {
//           title: results.results.channel.title,
//           forecast: results.results.channel.item.forecast,
//           sunrise: results.results.channel.astronomy.sunrise,
//           sunset: results.results.channel.astronomy.sunset
//         }
//       })
//     return newState
//   default:
//     return state
//   }
// }