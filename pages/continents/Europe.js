import React, {memo} from "react";
import Router from 'next/router';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
"world-110m.json";

const markers = [
{ xmarkerOffset: -88, ymarkerOffset:10 , name: "London, United Kingdom", coordinates: [-0.1276, 51.5072] },
{ xmarkerOffset: 6, ymarkerOffset:19 , name: "Paris, France", coordinates: [2.3522, 48.8566] },
{ xmarkerOffset: 0, ymarkerOffset:10 , name: "Florence, Italy", coordinates: [11.2558, 43.7696] },
{ xmarkerOffset: 56, ymarkerOffset:12, name: "Madrid, Spain", coordinates: [-3.7038, 40.4168] },
{ xmarkerOffset: -50, ymarkerOffset:0 , name: "Milan, Italy", coordinates: [9.1900, 45.4642] },
{ xmarkerOffset: -65, ymarkerOffset:4 , name: "Lisbon, Portugal", coordinates: [-9.1393, 38.7223] },
{ xmarkerOffset: 78, ymarkerOffset:-7 , name: "Budapest, Hungary", coordinates: [19.0402, 47.4979] },
{ xmarkerOffset: -55, ymarkerOffset:-30 , name: "Dublin, Ireland", coordinates: [-6.2603, 53.3498] },
{ xmarkerOffset: 94, ymarkerOffset:-7 , name: "Amsterdam, Netherlands", coordinates: [4.9041, 52.36761] },
{ xmarkerOffset: -65, ymarkerOffset:-7 , name: "Vienna, Austria", coordinates: [16.3738, 48.2082] },
];

const MapChart = () => {
  return (
    <div id= "europe">
    <ComposableMap data-tip="" projectionConfig={{ scale: 1000, center: [5.5, 40] }} style= {{backgroundColor: "#FDF5DF"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          
          geographies
          .filter(d => d.properties.CONTINENT === "Europe")
          .map(geo => 
          <Geography 
            key={geo.rsmKey} 
            geography={geo}
            fill= "#AF8C72"
            fillOpacity= {0.9}
            stroke= "#FDF5DF"
            strokeOpacity={0.6}
            style =  {{
              default: { outline: "none" },
              hover: {
                outline: "none"
                },
                pressed: {
                outline: "none"
                }
            }}
         />)
        }
      </Geographies>
      {markers.map(({ name, coordinates, xmarkerOffset, ymarkerOffset }) => (
        <Marker key={name} coordinates={coordinates} onClick={() => {
          if (name === "Dublin, Ireland") {
            Router.push('./European_Cities/Dublin')
          };
          if (name === "Amsterdam, Netherlands") {
            Router.push('./European_Cities/Amsterdam')
          };
          if (name === "London, United Kingdom") {
            Router.push('./European_Cities/London')
          };
          if (name === "Paris, France") {
            Router.push('./European_Cities/Paris')
          };
          if (name === "Vienna, Austria") {
            Router.push('./European_Cities/Vienna')
          };
          if (name === "Budapest, Hungary") {
            Router.push('./European_Cities/Budapest')
          };
          if (name === "Milan, Italy") {
            Router.push('./European_Cities/Milan')
          };
          if (name === "Florence, Italy") {
            Router.push('./European_Cities/Florence')
          };
          if (name === "Madrid, Spain") {
            Router.push('./European_Cities/Madrid')
          };
          if (name === "Lisbon, Portugal") {
            Router.push('./European_Cities/Lisbon')
          };
          }}>
          <g
            fill="#FDF5DF"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            x={xmarkerOffset}
            y={ymarkerOffset}
            style={{ fontFamily: "Cochin", fill: "Black" }}
          >
            {name}
          </text>
        </Marker>
        ))}
    </ComposableMap>
    </div>
  );
};

export default memo (MapChart);