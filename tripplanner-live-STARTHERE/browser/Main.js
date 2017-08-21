'use strict';

import React, {Component} from 'react'
import Map from './Map.js'
import Navbar from './Navbar.js'
import Panel from './Panel.js'
import attractions from './attractions.js'

export default class extends Component {
    constructor() {
        super()
        this.state = {
          hotels: [],
          restaurants: [],
          activities: []
        }
        //this.addFunc = this.addFunc.bind(this)
    }

    addFunc(attractionType) {
      // get the selectedId from the DOM element corresponding to attractionType
    const selectedId = document.getElementById(`${attractionType}-choices`).value
      // retrieve the corresponding selectedAttraction data from `attractions.find()`
    const selectedAttraction = attractions.find(attractionType, selectedId);
      // clone this.state into a new object so that you can modify it
    const newState = Object.assign({}, this.state)
      // modify your cloned object with selectedAttraction
      newState[attractionType].push(selectedAttraction)
      // setState with the modified cloned object
      this.setState(newState)
    }

    deleteFunc(attractionType, id) {
      // clone this.state into a new object so that you can modify it
      let newState = Object.assign({}, this.state)
      // filter out anything that has the target id from the new object[attractionType]
      newState[attractionType] = newState[attractionType].filter(place => place.id != id)
      // setState with the modified cloned object
      this.setState(newState)
    }

    render() {
        return (<div>
                 <Navbar />
                <div id="app" className="clearfix">
                  <Map />
                  <Panel
                    mainstate={this.state}
                    addFunc={this.addFunc.bind(this)}
                    deleteFunc={this.deleteFunc.bind(this)}
                    />
                </div>
                </div>)
    }
}
