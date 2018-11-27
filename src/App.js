import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const areasAPI = "http://localhost:3000/areas"
const hostsAPI = "http://localhost:3000/hosts"



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaData: [],
      hostData: [],
      capturedHost: null
    };
  }

  selectHost = (hostObj) => {
    this.setState({
      capturedHost: hostObj
    })
  }

  componentDidMount() {
    fetch(areasAPI)
    .then(res => res.json())
    .then(data => this.setState({
      areaData: data
      })
    )

    fetch(hostsAPI)
    .then(res => res.json())
    .then(data => this.setState({
      hostData: data
      })
    )
  }



  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          areaData = {this.state.areaData}
          hostData = {this.state.hostData}
        />
        <Headquarters
          capturedHost={this.state.capturedHost}
          selectHost={this.selectHost}
          hostData = {this.state.hostData}
          areaData = {this.state.areaData}
        />
      </Segment>
    )
  }
}

export default App;
