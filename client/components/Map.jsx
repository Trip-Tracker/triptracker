import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Flag from '@material-ui/icons/Flag';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      center: {lat: 50, lng: 50},
      zoom: 6,
      location: props.location
    }
  }

  componentDidMount () {
    const mapLocate = async (string) => {
      const urlParams = string.replace(' ', '+');
      await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlParams}&key=AIzaSyBbzUbuBUZpxN90QXl6n72kLbxz4yH8aQk`)
      .then(res => res.json())
      .then(apiRes =>{
        console.log(apiRes)
        let latitude = apiRes.results[0].geometry.location.lat;
        let longitude = apiRes.results[0].geometry.location.lng;
        this.setState({center: {lat: latitude, lng: longitude}});
        console.log(this.state)
      })
    } 
    mapLocate(this.state.location);
    console.log(this.state)

    
  }
  

  render() {


    return (
      // Important! Always set the container height explicitly
      <div id="themap" style={{ height: "50vh", width: "80vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbzUbuBUZpxN90QXl6n72kLbxz4yH8aQk" }}
          defaultCenter={this.state.center}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Flag
          style={{fill: "red"}}
          lat={this.state.center.lat}
          lng={this.state.center.lng}
          >Can text go here? </Flag>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
