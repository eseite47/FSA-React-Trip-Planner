import React, {Component} from 'react'
import attractions from './attractions.js'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
          hotels: [],
          restaurants: [],
          activities: []
        }
        attractions.load()
          .then(data => this.setState(data))
    }
    render() {
        let makeOption = type => this.state[type].map((place, i) => <option value={place.id} key={i}>{place.name}</option>)
        let makeLi = type => this.props.mainstate[type].map(place =>
        <li className='itinerary-item'>
          {place.name}
          <button className ="btn btn-xs btn-danger remove btn-circle" onClick={()=>this.props.deleteFunc(type, place.id)}>x</button>
        </li>)
        return (
          <div id="control-panel" className="col-sm-4 col-lg-3 clearfix">
            <div className="col-xs-6 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body" id="options-panel">
                  <div>
                    <h4>Hotels</h4>
                    <select id="hotels-choices">
                      {makeOption('hotels')}
                  </select>
                    <button id="hotels-add" className="btn btn-primary btn-circle pull-right" onClick={()=>this.props.addFunc('hotels')}>+</button>
                  </div>
                  <div>
                    <h4>Restaurants</h4>
                    <select id="restaurants-choices">
                     {makeOption('restaurants')}
                  </select>
                    <button id="restaurants-add" className="btn btn-primary btn-circle pull-right" onClick={()=>this.props.addFunc('restaurants')}>+</button>
                  </div>
                  <div>
                    <h4>Activities</h4>
                    <select id="activities-choices">
                     {makeOption('activities')}
                  </select>
                    <button id="activities-add" className="btn btn-primary btn-circle pull-right" onClick={()=>this.props.addFunc('activities')}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-12">

              <div className="panel panel-default">

                <div className="panel-body" id="itinerary">
                  <div>
                  <h4>My Hotel</h4>
                  <ul className="list-group" id="hotels-list">
                    {makeLi('hotels')}
                  </ul>
                  </div>
                  <div>
                  <h4>My Restaurants</h4>
                  <ul className="list-group" id="restaurants-list">
                  {makeLi('restaurants')}
                  </ul>
                  </div>
                  <div>
                  <h4>My Activities</h4>
                  <ul className="list-group" id="activities-list">
                  {makeLi('activities')}
                  </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>  )
      }
}
