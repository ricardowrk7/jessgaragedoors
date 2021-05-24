import React from 'react';
import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';
import keys from '../config/keys';

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
                googleMapsApiKey= {keys.googleMapsApiKey}>
                    <div className="map-container-1">
                        <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={9}
                        center={defaultCenter}
                        >
        {locations.map(place => {
          return (
            <React.Fragment key={place.id}>
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