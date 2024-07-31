export class Mapa {
    constructor(pontos, rotas, horarios) {
        this.mapStyle = [
            {
                elementType: 'geometry',
                stylers: [{ color: '#f5f5f5' }]
            },
            {
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{ color: '#616161' }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#f5f5f5' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#bdbdbd' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#eeeeee' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#757575' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#e5e5e5' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9e9e9e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#757575' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#dadada' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#616161' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9e9e9e' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#e5e5e5' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#eeeeee' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9c9c9' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9e9e9e' }]
            }
        ];
        this.mapOptions = {
            zoom: 15,
            center: { lat: -26.0817, lng: -53.0535 },
            styles: this.mapStyle,
            streetViewControl: false, // Remove Pegman (Street View)
            fullscreenControl: false, // Remove o controle de tela cheia
            mapTypeControl: false, // Remove o controle de tipo de mapa (satélite)
        };

        this.pontos = pontos;
        this.rotas = rotas;
        this.horarios = horarios;

        this.iconMarker = '../assets/icons/bus_station_icon.svg';
        this.map = null;
        this.directionsService = null;
        this.directionsRenderer = null;
    }

    initMap() {
        this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);
        this.createMarkers();
        this.configRouts();
    }

    createMarkers() {
        for (let i = 0; i < this.pontos.length; i++) {
            const marker = new google.maps.Marker({
                position: this.pontos[i].location,
                map: this.map,
                icon: {
                    url: this.iconMarker,
                    scaledSize: new google.maps.Size(45, 45),
                },
            });

            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.textoTeste {transform: translateY(-25px); }';
            document.getElementsByTagName('head')[0].appendChild(style);
            marker.addListener(
                'click', () => {
                    this.horarios.showHorarios(this.pontos[i].horarios);
                }
            );
        }
    }

    configRouts() {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: '#F9CE3A',
                strokeWeight: 4,
            }
        });
        this.directionsRenderer.setMap(this.map);
    }

    createRouts(rota) {
        const waypoints = this.rotas[rota].pontos.slice(1, -1).map(location => ({
            location: location,
            stopover: true
        }));

        this.directionsService.route(
            {
                origin: this.rotas[rota].pontos[0],
                destination: this.rotas[rota].pontos[this.rotas[rota].pontos.length - 1],
                waypoints: waypoints,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (response, status) => {
                if (status === 'OK') {
                    this.directionsRenderer.setDirections(response);
                } else {
                    window.alert('Erro ao carregar rota ' + status);
                }
            }
        );
    }

    async searchPlaces() {
        const input = document.getElementById('busca_mapa');
        const searchText = input.value + ', Francisco Beltrão - PR, Brasil';

        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchText)}&key=AIzaSyA8ExwQYDT5fOMbed02I9v7xp5EBPzcm-w`);
            const data = await response.json();

            if (data.status === 'OK' && data.results.length > 0) {
                const bounds = new google.maps.LatLngBounds();
                data.results.forEach(result => {
                    bounds.extend(result.geometry.location);
                });
                this.map.fitBounds(bounds);
                this.map.setZoom(Math.min(this.map.getZoom(), 16));
            } else {
                console.error('Geocoding API error:', data.status);
            }
        } catch (error) {
            console.error('Error fetching geocoding data:', error);
        }
    }
}