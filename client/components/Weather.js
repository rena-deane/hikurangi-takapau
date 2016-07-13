import React, { Component } from 'react'
import request from 'superagent'
import Forecast from './WeatherDayForecast'

class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {
                        title: '',
                        forecast: '',
                        sunrise: '',
                        sunset: '',
                        isFetching: true
                    }
    }

    componentWillMount() {
          const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22whakatane%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
          request.get(url)
            .then((response) => {
                const results = response.body.query
                this.setState({
                        title: results.results.channel.title,
                        forecast: results.results.channel.item.forecast,
                        sunrise: results.results.channel.astronomy.sunrise,
                        sunset: results.results.channel.astronomy.sunset,
                        isFetching: false
                    })
                console.log('Im setting the state here', this.state)
            })
            .catch((err) => console.error(err))
    }
    render() {
        console.log(this.state)
        const forecast = this.state.forecast
        console.log(forecast)
        return (
            <div id="weather">
                <h2>{this.state.title}</h2>
                <div className="show-forecast">
                {
                    this.state.isFetching ? <img src='../../public/images/triangle.gif' />
                    : forecast.map( (fore) => {
                        return <Forecast day={fore.day} date={fore.date} high={fore.high} low={fore.low} sunrise={fore.sunrise} sunset={fore.sunset} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default Weather

 // console.log(this.state)
 //        console.log(forecast)

// {forecast.map((eachDay) => {
//                         return <Forecast day={eachDay.day} date={eachDay.date} high={eachDay.high} low={eachDay.low} sunrise={eachDay.sunrise} sunset={eachDay.sunset} />
//                     })}