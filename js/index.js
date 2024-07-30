// index.js
import { Mapa } from './mapa.js';

document.addEventListener('DOMContentLoaded', () => {
  const mapa = new Mapa();
  mapa.initMap(() => {
    alert('Marker clicked!');
  });
});
