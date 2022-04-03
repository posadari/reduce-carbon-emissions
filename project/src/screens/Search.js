import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { setEndLocation, setStartLocation, setNumPass } from "../app/locationSlice";
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Geocode from "react-geocode";
import ResponsiveAppBar from '../components/Navbar.js'

Geocode.setApiKey('AIzaSyAQWDe2rOBt_u4Lxa3b2RBzfOJqZ0CZSuY');

export default function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();
  
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelectStart = (val) => {
    setValue(val, false);
    setStartingLocation(val);

  };

  const handleSelectEnd = (val) => {
    setValue(val, false);
    setEndingLocation(val);
  };
  const [num, setNum] = useState(0);

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));
    return (
      <>
        {suggestions}
        <li className="logo">
          <img
            src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
            alt="Powered by Google"
          />
        </li>
      </>
    );
  };


  const [startLocation, setStartingLocation] = useState("");
  const [endLocation, setEndingLocation] = useState("");
 //const dispatch = useDispatch();
  const box_style = {
      width: '800px',
      height: '400px',
      position: 'absolute',
      borderRadius: '10px', left: "50%",
    top: "45%",
    transform: "translate(-50%, -50%)"
  }

  const location_style = {
    position: 'absolute',
    borderRadius: '20px', left: "50%",
  top: "10%",
  transform: "translate(-50%, -50%)",
    backgroundColor: '#E8E4E4',
  marginTop: '10%',
  width: '600px',
  height: '40px',
  textAlign: 'center',
  fontSize: '16px',
  border: 'none'
}

const destination_style = {
        position: 'absolute',
        borderRadius: '20px', left: "50%",
      top: "25%",
      transform: "translate(-50%, -50%)",
        backgroundColor: '#E8E4E4',
      marginTop: '10%',
      width: '600px',
      height: '40px',
      textAlign: 'center',
      fontSize: '16px',
      border: 'none'
    }

    const number_style = {
            position: 'absolute',
            borderRadius: '20px', left: "50%",
          top: "45%",
          transform: "translate(-50%, -50%)",
          color: 'white',
          marginTop: '10%',
          width: '600px',
          height: '40px',
          textAlign: 'center',
          fontSize: '16px',
          border: 'none',
        }
  return (
      <div>

      
    <ResponsiveAppBar />
    <Card sx={box_style}>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        enter a description
        </Typography>
      </CardContent>
      
      <div style={{marginTop: '0.5em'}}>
      <div style={{margin: '0 auto'}}>

{/* start input */}
      <Combobox onSelect={handleSelectStart} aria-labelledby="demo" >
        <ComboboxInput
        style={location_style}
          className="input-field"
          placeholder="Enter current address"
          value={startLocation}
          onChange={(location)=>{
            setStartingLocation(location.target.value);
            handleInput(location);
            // dispatch(setStartLocation(location.target.value));
          }}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>

    </div>
        <div style={{marginTop: '0.5em'}}/>
        <div style={{margin: '0 auto'}}>

{/* end input */}
      <Combobox onSelect={handleSelectEnd} aria-labelledby="demo">
        <ComboboxInput
        style={destination_style}
          className="input-field"
          placeholder="Enter destination address"
          value={endLocation}
          onChange={(location)=>{
            setEndingLocation(location.target.value);
            handleInput(location);
            // dispatch(setEndLocation(location.target.value));
          }}
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
{/* 
       */}

    </div>
    <div style={{marginTop: '0.5em'}}/>
        <div style={{margin: '0 auto'}}>

      <TextField
      style = {number_style}
          id="filled-number"
          type="number"
          label="Enter number of passengers"
          value = {num}
          onChange={e => {
              const val = e.target.value;
              setNum(val);
            //   dispatch(setNumPass(val));
            }}
          InputLabelProps={{
            shrink: true,
          }}
        /> </div>
      </div>
      
      <CardActions>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '50%'}}>
        {/* <Link to="/results"> */}
          <button 
          
          style={{
            padding: 10,
            alignItems: 'center',
            marginTop: '250%',
            width: 100,
            borderWidth: 0,
            backgroundColor: '#b3926d',
            borderRadius: 5,
            transform: 'translate(-50%, 50%)'
          }
        }
        onClick={() => {
            console.log("num is " + num);
            console.log("starting location is " + startLocation);
            console.log("ending location is " + endLocation);
            // var distance = require('google-distance-updated');
            // distance.apiKey = "AIzaSyAQWDe2rOBt_u4Lxa3b2RBzfOJqZ0CZSuY";
            // distance
            //     .get({
            //         origin: startLocation,
            //         destination: endLocation,
            //         mode: "driving",
            //         units: "imperial",
            //     })
            //     .then(function (data) {
            //         console.log(data.distance);
            //     })
            //     .catch(function (err) {
            //         console.log(err);
            //     });
          }}
            >NEXT</button>
        {/* </Link> */}
        
        </div>
      </CardActions>
    </Card>
    </div>
  );
}