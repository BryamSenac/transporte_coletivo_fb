export class Horarios{
    constructor(){
        this.lista = document.getElementById("lista_horarios");
    }

    showHorarios(){
        this.lista.style.right = '0';
    }

    hideHorarios(){
        this.lista.style.right = '-15vw';
    }
}