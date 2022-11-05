import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Link from 'next/link';

function MapComponent() {
    //Dummy locations
    const locations = [
        {
            name: 'Ambassade de la Republique federale d\'Allemagne',
            parentCategory: 'Administration',
            category: "Embassy",
            city: 'Conakry',
            latitude: '9.5122736',
            longitude: '-13.7160043',
            verified: false,
        },
        {
            name: 'Ambassade de Palestine',
            parentCategory: 'Administration',
            category: "Embassy",
            city: 'Conakry',
            latitude: '9.5118561',
            longitude: '-13.7160678',
            verified: false,
        },
        {
            name: 'Institut Nako Diabaté',
            parentCategory: 'Education',
            category: "College",
            city: 'Conakry',
            latitude: '9.621789791',
            longitude: '-13.58247561',
            verified: false,
        },
        {
            name: 'Bicigui',
            parentCategory: 'Financial Services',
            category: "Atm",
            city: 'Conakry',
            latitude: '9.5756926',
            longitude: '-13.6205087',
            verified: false,
        }];

    //const position = [9.641, -13.579];
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
                        key={location.id}
                        position={[location.latitude, location.longitude]}
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