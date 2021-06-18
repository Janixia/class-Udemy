import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Brandenburg Gate',
        description: 'It is a former gateway to Berlin and one of the main symbols of both the city and Germany',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1200px-Brandenburger_Tor_abends.jpg',
        address: 'Pariser Platz, 10117 Berlin, Alemania',
        location: {
            lat: 52.4578934,
            lng: 13.1443338
        },
        creator: 'u1' 
    },
    {
        id: 'p2',
        title: 'Brandenburg Gate',
        description: 'It is a former gateway to Berlin and one of the main symbols of both the city and Germany',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1200px-Brandenburger_Tor_abends.jpg',
        address: 'Pariser Platz, 10117 Berlin, Alemania',
        location: {
            lat: 52.4578934,
            lng: 13.1443338
        },
        creator: 'u2'
    },
];

const UserPlaces = () => {
   const userId = useParams().userId; 
   const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId); 
    return <PlaceList items={loadedPlaces} />; 
}; 

export default UserPlaces;