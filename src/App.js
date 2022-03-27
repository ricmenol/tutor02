/* src/App.js */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './App.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/ricoli/cke36d9h3031a19kyk4gxvkey',
      center: [-46.4148,-23.6229],
      zoom: 8.96,
      attributionControl: false
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
return (
  <>
  <Grid container direction="column">
    <Grid item>oi</Grid>
    <Grid item container spacing={2}>
      <Grid item xs={4}>
        ei
      </Grid>
      <Grid item xs={4} style={{ display: "flex", flexDirection: "column" }}>
      <Paper style={{height: '100%'}}>
      <div className="map-container" ref={mapContainerRef} />
      </Paper>
      </Grid>
      <Grid item xs={4}>
        ei
      </Grid>
    </Grid>
    <Grid item>oi</Grid>
  </Grid>
</>
  )
};

export default App;
