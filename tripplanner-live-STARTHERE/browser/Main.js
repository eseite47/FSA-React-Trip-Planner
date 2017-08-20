'use strict';

import React, {Component} from 'react'
import Map from './Map.js'
import Navbar from './Navbar.js'
import Panel from './Panel.js'

export default class extends Component {
    constructor() {
        super()
        this.state = {
          hotels: [],
          restaurants: [],
          activities: []
        }
    }
    render() {
        return (<div>
                 <Navbar />
                <div id="app" className="clearfix">
                  <Map />
                  <Panel />
                   </div>
                </div>)
    }
}
