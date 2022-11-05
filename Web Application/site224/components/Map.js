import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Link from 'next/link';

function MapComponent( { locations } ) {

    const position = [locations[0].latitude, locations[0].longitude];
    const icon = new Icon({
        iconUrl: '/assets/imgs/Education.svg',
        iconSize: [25, 25],
    });

    return (
        <div className="w-full h-full">
            <MapContainer center={position} zoom={12} className="w-full h-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location) => (
                    <Marker
                        key={location.name}
                        position={[location.latitude, location.longitude]}
                        //icon={icon}
                        >
                        <Popup>
                            <Link href={''}>{location.name}</Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;