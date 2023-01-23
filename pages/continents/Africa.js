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
{ xmarkerOffset: 60, ymarkerOffset:-6 , name: "Cairo, Egypt", coordinates: [31.2357, 30.0444] },
{ xmarkerOffset: 0, ymarkerOffset:-35 , name: "Johannesburg, South Africa", coordinates: [28.0473, -26.2041] },
{ xmarkerOffset: -40, ymarkerOffset:25 , name: "Lagos, Nigeria", coordinates: [3.3792, 6.5244] },
{ xmarkerOffset: 70, ymarkerOffset:8 , name: "Nairobi, Kenya", coordinates: [36.8219, -1.2921] },
{ xmarkerOffset: 0, ymarkerOffset:15 , name: "Marrakech, Morocco", coordinates: [-7.9811, 27.6295] },
{ xmarkerOffset: 0, ymarkerOffset:17 , name: "Cape Town, South Africa", coordinates: [18.4241, -33.9249] },
{ xmarkerOffset: 75, ymarkerOffset:-20 , name: "Tunis, North Africa", coordinates: [9.5375, 33.8869] },
{ xmarkerOffset: 92, ymarkerOffset:-20 , name: "Addis Ababa, Ethiopia", coordinates: [38.7578, 8.9806] },
{ xmarkerOffset: 0, ymarkerOffset:-28 , name: "Algiers, Algeria", coordinates: [3.0588, 36.7538] },
{ xmarkerOffset: -80, ymarkerOffset:-20 , name: "Casablanca, Morocco", coordinates: [-7.5898, 33.5731] },
];

const MapChart = () => {
  return (
    <div id="africa">
    <ComposableMap data-tip="" projectionConfig={{ scale: 225, center: [20, -19] }} style= {{backgroundColor: "#FDF5DF"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
          .filter(d => d.properties.CONTINENT === "Africa")
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
          if (name === "Algiers, Algeria") {
            Router.push('./African_Cities/Algiers')
          };
          if (name === "Casablanca, Morocco") {
            Router.push('./African_Cities/Casablanca')
          };
          if (name === "Tunis, North Africa") {
            Router.push('./African_Cities/Tunis')
          };
          if (name === "Cairo, Egypt") {
            Router.push('./African_Cities/Cairo')
          };
          if (name === "Marrakech, Morocco") {
            Router.push('./African_Cities/Marrakech')
          };
          if (name === "Addis Ababa, Ethiopia") {
            Router.push('./African_Cities/AddisAbaba')
          };
          if (name === "Lagos, Nigeria") {
            Router.push('./African_Cities/Lagos')
          };
          if (name === "Nairobi, Kenya") {
            Router.push('./African_Cities/Nairobi')
          };
          if (name === "Johannesburg, South Africa") {
            Router.push('./African_Cities/Johannesburg')
          };
          if (name === "Cape Town, South Africa") {
            Router.push('./African_Cities/CapeTown')
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