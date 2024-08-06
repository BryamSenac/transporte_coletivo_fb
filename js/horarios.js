export class Horarios{
    constructor(){
        this.lista = document.getElementById("lista_horarios");
        this.listaHorarios = document.getElementById("horario_pontos");
        this.nome_bairro = document.getElementById("nome_bairro");
    }

    showHorarios(horarios){
        this.createHorarios(horarios);
        this.lista.style.right = '0';
    }

    hideHorarios(){
        this.lista.style.right = '-100vw';
    }

    createHorarios(horarios){
        this.listaHorarios.innerHTML = '';
        this.nome_bairro.textContent = horarios[0].bairro;
        for(let i = 0; i < horarios.length; i++){
            let div = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.textContent = horarios[i].hora;

            let img = document.createElement('img');
            img.src = '../assets/icons/flecha.svg';

            let h3 = document.createElement('h3');
            h3.textContent = horarios[i].destino;

            div.appendChild(h2);
            div.appendChild(img);
            div.appendChild(h3);

            this.listaHorarios.appendChild(div);
        }
    }
}