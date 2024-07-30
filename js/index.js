import { Mapa } from './mapa.js';
import { Horarios } from './horarios.js';
import { Rotas } from './rotas.js';
import { Onibus } from './onibus.js';

document.addEventListener('DOMContentLoaded', () => {
  const rotas = new Rotas();
  const mapa = new Mapa(rotas.rotas);
  const horarios = new Horarios();
  const onibus = new Onibus(mapa);

  window.hideHorarios = () => horarios.hideHorarios();
  window.searchBus = () => onibus.searchBus();
  window.searchPlaces = () => mapa.searchPlaces();

  mapa.initMap(() => {
    horarios.showHorarios();
  });
  onibus.createBusList(rotas.rotas);
});
