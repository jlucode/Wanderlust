import  { React, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  
  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 180, center: [20, -16]  }} style= {{backgroundColor: "#FDF5DF"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          
          geographies
          .filter(d => d.properties.CONTINENT !== "Antarctica")
          .map(geo => 
          <Geography 
            key={geo.rsmKey} 
            geography={geo}
            onMouseEnter={() => {
                const { CONTINENT} = geo.properties;
                setTooltipContent(`${CONTINENT}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }} 
            fill= "#AF8C72"
            stroke = "#FDF5DF"
            fillOpacity= {0.9}
            strokeOpacity= {0.5}
            onClick={() => {
              let continent = geo.properties.CONTINENT;      
                if (continent === 'Asia') {
                document.querySelector('#asia')
                .scrollIntoView({ behavior: 'smooth' })
                }
                else if (continent === 'Europe') {
                document.querySelector('#europe')
                .scrollIntoView({ behavior: 'smooth'})
                }
                else if (continent === 'Oceania') {
                document.querySelector('#australia')
                .scrollIntoView({ behavior: 'smooth' })
                }
                else if (continent === 'Africa') {
                document.querySelector('#africa')
                .scrollIntoView({ behavior: 'smooth' })
                }
                else if (continent === 'Oceania') {
                document.querySelector('#australia')
                .scrollIntoView({ behavior: 'smooth' })
                }
                else if (continent === 'South America') {
                document.querySelector('#southamerica')
                .scrollIntoView({ behavior: 'smooth' })
                }
                else if (continent === 'North America') {
                document.querySelector('#northamerica')
                .scrollIntoView({ behavior: 'smooth' })
                }
            }}
            style =  {{
              default: { outline: "none" },
              hover: {
                fill: "#90CDC3",
                stroke: "#FDF5DF",
                strokeWidth: 0.76,
                outline: "black",
                
                },
                pressed: {
                  fill: "#FDF5DF",
                  stroke: "#64418a",
                  strokeWidth: 0.76,
                  outline: "black"
                  }

            }}
         />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default memo (MapChart);