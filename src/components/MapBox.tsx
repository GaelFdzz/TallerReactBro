import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FlbGZkeiIsImEiOiJjbTJjZXZxd2YweXNvMm1weTNvcDdjNG40In0.2POiq_70F9nHfajnXPPFSQ';

const MapBox: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);

    // Array con las coordenadas de los negocios
    const locations = [
        { lng: -86.82294022262012, lat: 21.146969273961776, name: 'Plaza Las Américas' },
        { lng: -86.80799130533254, lat: 21.160945530161516, name: 'Plaza comercial Puerto Cancún' },
        { lng: -86.8539039626975, lat: 21.14004072340671, name: 'Gran Plaza' },
    ];

    useEffect(() => {
        if (mapContainer.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [-86.82294022262012, 21.146969273961776], // Coordenadas iniciales
                zoom: 12.5,
            });

            // Iterar sobre el array de ubicaciones y agregar marcadores
            locations.forEach(location => {
                const marker = new mapboxgl.Marker()
                    .setLngLat([location.lng, location.lat])
                    .setPopup(new mapboxgl.Popup().setText(location.name)) // Añadir popup con el nombre
                    .addTo(map);
            });

        }
    }, []);

    return (
        <div>
            <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
        </div>
    );
};

export default MapBox;
