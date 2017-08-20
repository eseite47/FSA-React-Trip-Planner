import React, {Component} from 'react'

export default class extends Component {
    constructor() {
        super()
    }
    render() {
        return (
          <div id="control-panel" className="col-sm-4 col-lg-3 clearfix">
            <div className="col-xs-6 col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body" id="options-panel">
                  <div>
                    <h4>Hotels</h4>
                    <select id="hotels-choices">
                  </select>
                    <button id="hotels-add" className="btn btn-primary btn-circle pull-right">+</button>
                  </div>
                  <div>
                    <h4>Restaurants</h4>
                    <select id="restaurants-choices">
                  </select>
                    <button id="restaurants-add" className="btn btn-primary btn-circle pull-right">+</button>
                  </div>
                  <div>
                    <h4>Activities</h4>
                    <select id="activities-choices">
                  </select>
                    <button id="activities-add" className="btn btn-primary btn-circle pull-right">+</button>
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
                  </ul>
                  </div>
                  <div>
                  <h4>My Restaurants</h4>
                  <ul className="list-group" id="restaurants-list">

                  </ul>
                  </div>
                  <div>
                  <h4>My Activities</h4>
                  <ul className="list-group" id="activities-list">

                  </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>  )
      }
}
