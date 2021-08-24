import React from 'react';
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';

const Maps = ({locations}) => {

    const mapStyles = {        
        height: "100%",
        width: "100%", 
        overflow: 'hidden',};
        
        const defaultCenter = {
        // lat: coordinates.lat, lng: coordinates.lng,
        //vohnt headquarters
        lat: 39.998970, lng: -82.718200,
    }
        
    return (
        <React.Fragment>
            <LoadScript
                googleMapsApiKey= {process.env.GOOGLE_MAPS_API_KEY}>
                    <div className="map-container">
                        <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={11}
                        center={defaultCenter}
                        >
        {locations.map((place, index) => {
          return (
            <React.Fragment key={index}>
              <Marker
                position={{
                  lat: parseFloat(place.latitude),
                  lng: parseFloat(place.longitude)
                }}
              />
              {place.circle && 
                        <Circle
                        defaultCenter={{
                            lat: parseFloat(place.latitude),
                            lng: parseFloat(place.longitude)
                        }}
                        radius={place.circle.radius}
                        options={place.circle.options}
                        />
                    }
                    </React.Fragment>
                );
                })}
                    </GoogleMap>
                </div>
            </LoadScript>
        </React.Fragment>
    )
}

export default Maps;