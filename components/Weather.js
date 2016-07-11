import React, { Component } from 'react'
import request from 'superagent'

class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount() {
          const url = `${YAHOO_WHAKATANE_WEATHER}`
          request.get(url)
            .then((response) => {
                const results = response.body.query
                this.setState=(
                    {   location: results }
                )
                console.log(this.setState)
            })
            .catch((err) => console.error(err))
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id="weather">
                <h2>Huarere ki Hikurangi</h2>
                <h3>Weather - Five day outlook</h3>
                <p></p>
             </div>
        )
    }
}

export default Weather