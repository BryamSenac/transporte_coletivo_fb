const grayStyle = [
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
let map;
let searchBox;
let directionsService;
let directionsRenderer;
let rotas;
function initMap() {
  // Opções do mapa
  const mapOptions = {
    zoom: 15,
    center: { lat: -26.0817, lng: -53.0535 },
    styles: grayStyle,
    streetViewControl: false, // Remove Pegman (Street View)
    fullscreenControl: false, // Remove o controle de tela cheia
    mapTypeControl: false, // Remove o controle de tipo de mapa (satélite)
  };
  // Cria o mapa
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // URL do icone
  const iconUrl = './assets/icons/bus_station_icon.svg'; // Trocar pelo icone da localização
  rotas = [
    {
      rota: 'sao_cristovao', pontos: [
        { lat: -26.113364622756166, lng: -53.041800439586964, title: "Pr 180" },
        { lat: -26.090613540940648, lng: -53.05028800086663, title: "Rod.Dep.Sebastião Rodrigo Júnior" },
        { lat: -26.086623499329097, lng: -53.04850900760973, title: "Av Luiz Antonio Faedo" },
        { lat: -26.08359872012035, lng: -53.04753698059514, title: "Av Luiz Antonio Faedo" },
        { lat: -26.080062191172082, lng: -53.04891189707587, title: "Terminal" },
      ]
    },
    {
      rota: 'pinheirinho', pontos: [
        { lat: -26.04989668919642, lng: -53.0524736882763, title: "Rodovia Olivo Zanella 2" },
        { lat: -26.045332483138623, lng: -53.054201255820495, title: "AV. Atílio Fontana" },
        { lat: -26.04037434394185, lng: -53.057370341327825, title: "Rua Lages" },
        { lat: -26.04271892889147, lng: -53.05819667254745, title: "Rua São Cristóvão" },
        { lat: -26.045752103120456, lng: -53.061403055169485, title: "Rua Taubaté" },
        { lat: -26.043098744296543, lng: -53.05556896487679, title: "Rodovia Olivo Zanella" },
        { lat: -26.05061210090695, lng: -53.052475203826106, title: "Rodovia Olivo Zanella" },
      ]
    },
    {
      rota: 'padre_ulrico', pontos: [
        { lat: -26.060694, lng: -53.030306, title: "R. Albatroz" },
        { lat: -26.058889, lng: -53.031722, title: "R. Pelicano" },
        { lat: -26.058333, lng: -53.033611, title: "R. Silvestre Marcelo" },
        { lat: -26.057444, lng: -53.036389, title: "R. Flamingo" },
        { lat: -26.055227, lng: -53.035760, title: "Av. Tucano" },
        { lat: -26.053769, lng: -53.035459, title: "R. Pica Pau." },
        { lat: -26.051291, lng: -53.034597, title: "R. Beija Flor" },
        { lat: -26.058889, lng: -53.031722, title: "R. Pelicano" },
      ]
    },
    {
      rota: 'vilanova', pontos: [
        { lat: -26.079389, lng: -53.046028, title: "União da Vitória" },
        { lat: -26.075917, lng: -53.025806, title: "Rodovia Contorno Norte" },
        { lat: -26.062917, lng: -53.033333, title: "Rua lateral do SEST/SENAT" },
        { lat: -26.060694, lng: -53.030306, title: "R. Albatroz" },
        { lat: -26.058889, lng: -53.031722, title: "R. Pelicano" },
        { lat: -26.057444, lng: -53.036389, title: "R. Flamingo" },
        { lat: -26.055227, lng: -53.035760, title: "Av. Tucano" },
        { lat: -26.058333, lng: -53.033611, title: "R. Silvestre Marcelo" },
        { lat: -26.048952, lng: -53.035178, title: "R. Altamir Bonetti" },
        { lat: -26.049576, lng: -53.036587, title: "R. Otacilio Brito" },
        { lat: -26.056726, lng: -53.039873, title: "R. Marília" },
        { lat: -26.065491, lng: -53.043637, title: "R. Venezuela" },
        { lat: -26.070576, lng: -53.044885, title: "R. Tenente Camargo" },
        { lat: -26.080013, lng: -53.048486, title: "Av. Luiz Antonio Faedo" },
        { lat: -26.071365, lng: -53.045631, title: "R. Tenente Camargo" },
        { lat: -26.069284, lng: -53.043448, title: "R. Tenente Camargo" },
        { lat: -26.069881, lng: -53.036200, title: "R. União da Vitória" },
        { lat: -26.071365, lng: -53.045631, title: "R. Tenente Camargo" },
        { lat: -26.071365, lng: -53.045631, title: "R. Tenente Camargo" },
      ]
    },
    {
      rota: 'linha_sadia', pontos: [
        { lat: -26.066745, lng: -53.053454, title: "R. Governador Parigot de Souza" },
        { lat: -26.065761, lng: -53.049052, title: "R. Governador Parigot de Souza" },
        { lat: -26.065371, lng: -53.056238, title: "Av. General Osório" },
      ]
    },
  ];

  for (let i = 0; i < rotas.length; i++) {
    for (let j = 0; j < rotas[i].pontos.length; j++) {
      const marker = new google.maps.Marker({
        position: rotas[i].pontos[j],
        map,
        title: "Hello World!",
        icon: {
          url: iconUrl, // URL da imagem do ícone personalizado
          scaledSize: new google.maps.Size(40, 40) // Tamanho da imagem (opcional)
        },
        // label: {
        //   text: rotas[i].pontos[j].title,
        //   color: "#000000",
        //   fontSize: "25px",
        //   fontWeight: "tiny",
        //   fontSize: "0.7vw",
        //   className: "textoTeste"
        // },
      });
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '.textoTeste {transform: translateY(-25px); }';
      document.getElementsByTagName('head')[0].appendChild(style);

      marker.addListener('click', function () {
        // Ação ao clicar no marcador
        alert(rotas[i].pontos[j].title);
        // Você pode adicionar qualquer ação aqui, como abrir um modal, redirecionar, etc.
      });
    }
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: '#F9CE3A',
      strokeWeight: 4,
    }
  });

  directionsRenderer.setMap(map);
}

function criarRotas(rota) {
  const waypoints = rota.pontos.slice(1, -1).map(location => ({
    location: location,
    stopover: true
  }));

  directionsService.route(
    {
      origin: rota.pontos[0],
      destination: rota.pontos[rota.pontos.length - 1],
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING
    },
    (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}
function handleRouteButtonClick(index) {
  calculateAndDisplayRoute(rotas[index]);
}

async function searchPlaces() {
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
      map.fitBounds(bounds);
      map.setZoom(Math.min(map.getZoom(), 16));
    } else {
      console.error('Geocoding API error:', data.status);
    }
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
  }
}

function loadScript(url, callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function () {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyA8ExwQYDT5fOMbed02I9v7xp5EBPzcm-w&libraries=places&callback=initMap`);
});