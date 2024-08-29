import React from 'react';
import { Map, GoogleApiWrapper} from 'google-maps-react'

function GMap(props) {
    return(
        <div>
        <Map 
        google = {this.props.google}
        style= {{width: "100%", height: "100%"}}
        zoom= {10}
        initialCenter = {{
            lat: 48.1351,
            lng: 11.5820
        }}
        />
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCB-vxrFx9373WozR8KUKNheAuJa9Ld3Ps"
})(GMap)