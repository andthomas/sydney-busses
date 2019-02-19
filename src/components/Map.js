import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                latitude: -33.8688,
                longitude: 151.2093,
                zoom: 12
            }
        };
    };

    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken='pk.eyJ1IjoiYXRrYSIsImEiOiJjanNiODY3Y3cwN21tNDNtcHBodzllczdqIn0.BVbnbFk9O-NBzwRgLFXgoA'
                {...this.state.viewport}
                onViewportChange={(viewport) => {
                    const { width, height, latitude, longitude, zoom } = viewport;
                }}
            />
        );
    }
}

export default hot(module)(Map)