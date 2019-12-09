import GoogleMapReact from 'google-map-react'
import React, { Component } from 'react'
import { mapStyles } from './MapStyles'

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.23,
    },
    zoom: 13,
  }
  render() {
    const renderMarkers = (map, maps) => {
      return new maps.Marker({
        position: { lat: 37.76, lng: -122.23 },
        map,
      })
    }
    const renderWindows = (map, maps) => {
      return new maps.InfoWindow({
        position: { lat: 37.7658, lng: -122.23 },
        map,
        content: `<div class="maps-info-window">Cafelina</div>`,
      })
    }
    return (
      // Important! Always set the container height explicitly
      <section aria-label="Google Maps">
        <div style={{ height: '40vh', width: '100%', marginTop: `70px` }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={mapStyles}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => {
              renderMarkers(map, maps)
              renderWindows(map, maps)
            }}
          />
        </div>
      </section>
    )
  }
}

export default SimpleMap
