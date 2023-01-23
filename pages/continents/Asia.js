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
{ xmarkerOffset: -75, ymarkerOffset:-7 , name: "Bangkok, Thailand", coordinates: [100.5018, 13.7563] },
{ xmarkerOffset: 80, ymarkerOffset:-21 , name: "Manila, Phillippines", coordinates: [120.9842, 14.5995] },
{ xmarkerOffset: 85, ymarkerOffset:-7 , name: "Singapore, Singapore", coordinates: [103.8198, 1.3521] },
{ xmarkerOffset: -5, ymarkerOffset:-30, name: "Dubai, UAE", coordinates: [55.2708, 25.2048] },
{ xmarkerOffset: 57, ymarkerOffset:-23 , name: "Tokyo, Japan", coordinates: [139.6503, 35.6762] },
{ xmarkerOffset: 0, ymarkerOffset:26 , name: "Bali, Indonesia", coordinates: [115.1889, -8.4095] },
{ xmarkerOffset: 62, ymarkerOffset:-30 , name: "Hong Kong, China", coordinates: [114.1694, 22.3193] },
{ xmarkerOffset: -93, ymarkerOffset:-10 , name: "Kuala Lumpur, Malaysia", coordinates: [101.6869, 3.1390] },
{ xmarkerOffset: -75, ymarkerOffset:-25 , name: "Seoul, South Korea", coordinates: [126.9780, 37.5665] },
{ xmarkerOffset: 58, ymarkerOffset:-28 , name: "New Delhi, India", coordinates: [77.2090, 28.6139] },
];

const MapChart = () => {
  return (
    <div id="asia">
    <ComposableMap data-tip="" projectionConfig={{ scale: 310, center: [90, 1] }} style= {{backgroundColor: "#FDF5DF"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
          .filter(d => d.properties.CONTINENT === "Asia")
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
          if (name === "New Delhi, India") {
            Router.push('./Asian_Cities/NewDelhi')
          };
          if (name === "Dubai, UAE") {
            Router.push('./Asian_Cities/Dubai')
          };
          if (name === "Seoul, South Korea") {
            Router.push('./Asian_Cities/Seoul')
          };
          if (name === "Hong Kong, China") {
            Router.push('./Asian_Cities/HongKong')
          };
          if (name === "Bangkok, Thailand") {
            Router.push('./Asian_Cities/Bangkok')
          };
          if (name === "Kuala Lumpur, Malaysia") {
            Router.push('./Asian_Cities/KualaLumpur')
          };
          if (name === "Tokyo, Japan") {
            Router.push('./Asian_Cities/Tokyo')
          };
          if (name === "Manila, Phillippines") {
            Router.push('./Asian_Cities/Manila')
          };
          if (name === "Singapore, Singapore") {
            Router.push('./Asian_Cities/Singapore')
          };
          if (name === "Bali, Indonesia") {
            Router.push('./Asian_Cities/Bali')
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