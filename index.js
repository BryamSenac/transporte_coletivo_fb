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
function initMap() {
  // Opções do mapa
  const mapOptions = {
    zoom: 15,
    center: { lat : -26.0817, lng: -53.0535},
    styles: grayStyle,
    streetViewControl: false, // Remove Pegman (Street View)
    fullscreenControl: false, // Remove o controle de tela cheia
    mapTypeControl: false, // Remove o controle de tipo de mapa (satélite)
  };
  // Cria o mapa
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
    position: mapOptions.center,
    map,
    title: "Hello World!"
  });

  marker.addListener('click', function() {
    // Ação ao clicar no marcador
    alert('Marcador selecionado!');
    // Você pode adicionar qualquer ação aqui, como abrir um modal, redirecionar, etc.
  });
  
}