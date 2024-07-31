import { Mapa } from './mapa.js';
import { Horarios } from './horarios.js';
import { Onibus } from './onibus.js';

import { Rotas } from './rotas.js';
import { Pontos } from './pontos.js';


document.addEventListener('DOMContentLoaded', () => {
  const rotas = new Rotas();
  const pontos = new Pontos();
  const horarios = new Horarios();
  
  const mapa = new Mapa(pontos.pontos , rotas.rotas, horarios);
  const onibus = new Onibus(mapa);
  

  window.hideHorarios = () => horarios.hideHorarios();
  window.searchBus = () => onibus.searchBus();
  window.searchPlaces = () => mapa.searchPlaces();

  mapa.initMap();
  onibus.createBusList(rotas.rotas);
});
