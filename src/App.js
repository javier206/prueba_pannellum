import React from 'react';
import {Pannellum, PannellumVideo}from 'pannellum-react';

//imagenes
import miamiBeach from './images/miami_beach.jpeg'
import miamiCity from './images/miami_city.jpeg'

function App() {
  return (
    <div>
      <Pannellum
        width="100%"
        height="500px"
        image={miamiCity}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf/pannellum-react"
      />
 
      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf/pannellum-react"
      />
    </Pannellum>
    </div>
  );
}

export default App;
