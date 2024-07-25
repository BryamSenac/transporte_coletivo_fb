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
    center: { lat: -26.0817, lng: -53.0535 },
    styles: grayStyle,
    streetViewControl: false, // Remove Pegman (Street View)
    fullscreenControl: false, // Remove o controle de tela cheia
    mapTypeControl: false, // Remove o controle de tipo de mapa (satélite)
  };
  // Cria o mapa
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // URL do icone
  const iconUrl = './assets/icons/bus_icon.svg'; // Trocar pelo icone da localização

  const locations = [
    { lat: -26.113364622756166, lng: -53.041800439586964, title: "Pr 180" },
    { lat: -26.090613540940648, lng: -53.05028800086663, title: "Rod.Dep.Sebastião Rodrigo Júnior" },
    { lat: -26.086623499329097, lng: -53.04850900760973, title: "Av Luiz Antonio Faedo" },
    { lat: -26.08359872012035, lng: -53.04753698059514, title: "Av Luiz Antonio Faedo" },
    { lat: -53.052475203826106, lng: -26.05061210090695, title: "Rodovia Olivo Zanella" },
    { lat: -26.04989668919642, lng: -53.0524736882763, title: "Rodovia Olivo Zanella 2" },
    { lat: -26.065371, lng: -53.056238, title: "Av. General Osório" },
    { lat: -26.079389, lng: -53.046028, title: "União da Vitória" },
    { lat: -26.075917, lng: -53.025806, title: "Rodovia Contorno Norte" },
    { lat: -26.062917, lng: -53.033333, title: "R. lateral do SEST/SENAT" },
    { lat: -26.060694, lng: -53.030306, title: "R. Albatroz" },
    { lat: -26.058889, lng: -53.031722, title: "R. Pelicano" },
    { lat: -26.058333, lng: -53.033611, title: "R. Silvestre Marcelo" },
    { lat: -26.057444, lng: -53.036389, title: "R. Flamingo" },
    { lat: -26.055227, lng: -53.035760, title: "Av. Tucano" },
    { lat: -26.053769, lng: -53.035459, title: "R. Pica Pau." },
    { lat: -26.051291, lng: -53.034597, title: "R. Beija Flor" },
    { lat: -26.048952, lng: -53.035178, title: "R. Altamir Bonetti" },
    { lat: -26.049576, lng: -53.036587, title: "R. Otacilio Brito" },
    { lat: -26.056726, lng: -53.039873, title: "R. Marília" },
    { lat: -26.065491, lng: -53.043637, title: "R. Venezuela" },
    { lat: -26.070576, lng: -53.044885, title: "R. Tenente Camargo" },
    { lat: -26.080013, lng: -53.048486, title: "Av. Luiz Antonio Faedo" },
    { lat: -26.071365, lng: -53.045631, title: "R. Tenente Camargo" },
    { lat: -26.069284, lng: -53.043448, title: "R. Tenente Camargo" },
    { lat: -26.069881, lng: -53.036200, title: "R. União da Vitória" },
  ];

  for (let i = 0; i < locations.length; i++) {
    const marker = new google.maps.Marker({
      position: locations[i],
      map,
      title: "Hello World!",
      icon: {
        url: iconUrl, // URL da imagem do ícone personalizado
        scaledSize: new google.maps.Size(20, 20) // Tamanho da imagem (opcional)
      },
      label: {
        text: locations[i].title,
        color: "#000000",
        fontSize: "25px",
        fontWeight: "tiny", 
        fontSize: "0.7vw",
        className: "textoTeste"
      },
    });
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.textoTeste {transform: translateY(-25px); }';
    document.getElementsByTagName('head')[0].appendChild(style);

    marker.addListener('click', function () {
      // Ação ao clicar no marcador
      alert(locations[i].title);
      // Você pode adicionar qualquer ação aqui, como abrir um modal, redirecionar, etc.
    });
  }
}