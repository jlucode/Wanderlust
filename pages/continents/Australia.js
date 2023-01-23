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
{ xmarkerOffset: 35, ymarkerOffset:5 , name: "Sydney", coordinates: [151.2093, -33.8688] },
{ xmarkerOffset: -45, ymarkerOffset:5 , name: "Melbourne", coordinates: [144.9631, -37.8136] },
{ xmarkerOffset: -40, ymarkerOffset:-23 , name: "Brisbane", coordinates: [150.4260, -26.4705] },
{ xmarkerOffset: -30, ymarkerOffset:-8 , name: "Perth", coordinates: [115.8613, -31.9523] },
{ xmarkerOffset: 0, ymarkerOffset:-35 , name: "Adelaide", coordinates: [138.6007, -34.9285] },
{ xmarkerOffset: -49, ymarkerOffset:-5 , name: "Gold Coast", coordinates: [152.4000, -29.0167] },
{ xmarkerOffset: 35, ymarkerOffset:15 , name: "Canberra", coordinates: [149.1310, -35.2802] },
{ xmarkerOffset: 48, ymarkerOffset:-5 , name: "Logan City", coordinates: [153.0619, -27.7750] },
{ xmarkerOffset: 48, ymarkerOffset:10 , name: "Christchurch", coordinates: [172.6306, -43.5320] },
{ xmarkerOffset: 48, ymarkerOffset:-5 , name: "Auckland", coordinates: [174.7645, -36.8509] },
];

const MapChart = () => {
  return (
    <div id="australia">
    <ComposableMap data-tip="" projectionConfig={{ scale: 600, center: [150, 320] }} style= {{backgroundColor: "#FDF5DF"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
          .filter(d => d.properties.CONTINENT === "Oceania")
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
          if (name === "Perth") {
            Router.push('./Australian_Cities/Perth')
          };
          if (name === "Logan City") {
            Router.push('./Australian_Cities/LoganCity')
          };
          if (name === "Gold Coast") {
            Router.push('./Australian_Cities/GoldCoast')
          };
          if (name === "Brisbane") {
            Router.push('./Australian_Cities/Brisbane')
          };
          if (name === "Sydney") {
            Router.push('./Australian_Cities/Sydney')
          };
          if (name === "Canberra") {
            Router.push('./Australian_Cities/Canberra')
          };
          if (name === "Melbourne") {
            Router.push('./Australian_Cities/Melbourne')
          };
          if (name === "Adelaide") {
            Router.push('./Australian_Cities/Adelaide')
          };
          if (name === "Auckland") {
            Router.push('./Australian_Cities/Auckland')
          };
          if (name === "Christchurch") {
            Router.push('./Australian_Cities/Christchurch')
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