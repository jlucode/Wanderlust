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
{ xmarkerOffset: 72, ymarkerOffset:-7 , name: "Bogota, Colombia", coordinates: [-72.0721, 3.7110] },
{ xmarkerOffset: -69, ymarkerOffset:0 , name: "Sao Paulo, Brazil", coordinates: [-46.6396, -23.5558] },
{ xmarkerOffset: -46, ymarkerOffset:-7 , name: "Lima, Peru", coordinates: [-77.0428, -12.0464] },
{ xmarkerOffset: -76, ymarkerOffset:-12, name: "Medellin, Colombia", coordinates: [-75.5658, 6.2476] },
{ xmarkerOffset: 93, ymarkerOffset:15 , name: "Buenos Aires, Argentina", coordinates: [-58.3816, -34.6037] },
{ xmarkerOffset: 88, ymarkerOffset:-12 , name: "Rio de Janeiro, Brazil", coordinates: [-43.1729, -22.9068] },
{ xmarkerOffset: 80, ymarkerOffset:-25 , name: "Cartagena, Colombia", coordinates: [-75.4832, 10.3932] },
{ xmarkerOffset: -60, ymarkerOffset:-3 , name: "Santiago, Chile", coordinates: [-70.6693, -33.4489] },
{ xmarkerOffset: -55, ymarkerOffset:3 , name: "Cali, Colombia", coordinates: [-76.5320, 2.4516] },
{ xmarkerOffset: -40, ymarkerOffset:10 , name: "Cusco, Peru", coordinates: [-71.9675, -13.5320] },
];

const MapChart = () => {

  return (
    <div id= "southamerica">
    <ComposableMap data-tip="" projectionConfig={{ scale: 310, center: [-66, -29] }} style= {{backgroundColor: "#FDF5DF"}} >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
          .filter(d => d.properties.CONTINENT === "South America")
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
          if (name === "Cartagena, Colombia") {
            Router.push('./SouthAmerican_Cities/Cartagena')
          };
          if (name === "Bogota, Colombia") {
            Router.push('./SouthAmerican_Cities/Bogota')
          };
          if (name === "Medellin, Colombia") {
            Router.push('./SouthAmerican_Cities/Medellin')
          };
          if (name === "Cali, Colombia") {
            Router.push('./SouthAmerican_Cities/Cali')
          };
          if (name === "Lima, Peru") {
            Router.push('./SouthAmerican_Cities/Lima')
          };
          if (name === "Cusco, Peru") {
            Router.push('./SouthAmerican_Cities/Cusco')
          };
          if (name === "Rio de Janeiro, Brazil") {
            Router.push('./SouthAmerican_Cities/RioDeJaneiro')
          };
          if (name === "Sao Paulo, Brazil") {
            Router.push('./SouthAmerican_Cities/SaoPaulo')
          };
          if (name === "Santiago, Chile") {
            Router.push('./SouthAmerican_Cities/Santiago')
          };
          if (name === "Buenos Aires, Argentina") {
            Router.push('./SouthAmerican_Cities/BuenosAires')
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