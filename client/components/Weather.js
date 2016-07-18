import React, { Component } from 'react'
import request from 'superagent'
import Forecast from './WeatherDayForecast'
import Current from './WeatherDay'

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
                        wind: results.results.channel.wind,
                        atmosphere: results.results.channel.atmosphere,
                        astronomy: results.results.channel.astronomy,
                        isFetching: false
                    })
                console.log('Im setting the state here', this.state)
            })
            .catch((err) => console.error(err))
    }
    render() {
        const current = this.state.forecast[0]
        const forecast = this.state.forecast.slice(1, 6)
        return (
            <div id="weather">
                <h3>Current Conditions</h3>
                {
                    this.state.isFetching ? <img className='loading' src='./images/triangle.gif' />
                    : <Current
                        day={current.day}
                        date={current.date}
                        text={current.text}
                        high={current.high}
                        low={current.low}
                        chill={this.state.wind.chill}
                        direction={this.state.wind.direction}
                        speed={this.state.wind.speed}
                        humidity={this.state.atmosphere.humidity}
                        visibility={this.state.atmosphere.visibility}
                        sunrise={this.state.astronomy.sunrise}
                        sunset={this.state.astronomy.sunrise} />
                }
                <h3>Five-Day Forecast</h3>
                <div id="show-forecast">
                {
                    this.state.isFetching ? <img className='loading' src='./images/triangle.gif' />
                    : forecast.map( (fore, index) => {
                        return <Forecast
                                    key={index}
                                    day={fore.day}
                                    date={fore.date}
                                    high={fore.high}
                                    low={fore.low}
                                    text={fore.text} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default Weather

// <Current day={current.day} date={current.date} text={current.date} high={current.high} low={current.low} chill={this.state.wind.chill} direction={this.state.wind.direction} speed={this.state.wind.speed} humidity={this.state.atmosphere.humidity} visibility={this.state.atmosphere.visibility} sunrise={this.state.astronomy.sunrise} sunset={this.state.astronomy.sunrise} />

