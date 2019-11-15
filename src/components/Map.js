import GoogleMapReact from "google-map-react"
import React, { Component } from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    // NOTE: adjust location, zoom, marker, styles component
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 15,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <section aria-label="Google Maps">
        <div style={{ height: "40vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{
              styles: [
                {
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#ebe3cd",
                    },
                  ],
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#523735",
                    },
                  ],
                },
                {
                  elementType: "labels.text.stroke",
                  stylers: [
                    {
                      color: "#f5f1e6",
                    },
                  ],
                },
                {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#c9b2a6",
                    },
                  ],
                },
                {
                  featureType: "administrative.land_parcel",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#dcd2be",
                    },
                  ],
                },
                {
                  featureType: "administrative.land_parcel",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#ae9e90",
                    },
                  ],
                },
                {
                  featureType: "landscape.natural",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dfd2ae",
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dfd2ae",
                    },
                  ],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#93817c",
                    },
                  ],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#a5b076",
                    },
                  ],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#447530",
                    },
                  ],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f5f1e6",
                    },
                  ],
                },
                {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#fdfcf8",
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#f8c967",
                    },
                  ],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#e9bc62",
                    },
                  ],
                },
                {
                  featureType: "road.highway.controlled_access",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#e98d58",
                    },
                  ],
                },
                {
                  featureType: "road.highway.controlled_access",
                  elementType: "geometry.stroke",
                  stylers: [
                    {
                      color: "#db8555",
                    },
                  ],
                },
                {
                  featureType: "road.local",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#806b63",
                    },
                  ],
                },
                {
                  featureType: "transit.line",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dfd2ae",
                    },
                  ],
                },
                {
                  featureType: "transit.line",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#8f7d77",
                    },
                  ],
                },
                {
                  featureType: "transit.line",
                  elementType: "labels.text.stroke",
                  stylers: [
                    {
                      color: "#ebe3cd",
                    },
                  ],
                },
                {
                  featureType: "transit.station",
                  elementType: "geometry",
                  stylers: [
                    {
                      color: "#dfd2ae",
                    },
                  ],
                },
                {
                  featureType: "water",
                  elementType: "geometry.fill",
                  stylers: [
                    {
                      color: "#b9d3c2",
                    },
                  ],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [
                    {
                      color: "#92998d",
                    },
                  ],
                },
              ],
            }}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>
    )
  }
}

export default SimpleMap
