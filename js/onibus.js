export class Onibus {
    constructor(mapa) {
        this.mapa = mapa;
        this.cartoes_onibus = document.getElementById('cartoes_onibus');
        this.searchBusInput = document.getElementById('texto_input');
        this.searchBusBtn = document.getElementById('pesquisar_btn');
    }

    createBusList(list_onibus) {
        this.cartoes_onibus.innerHTML = '';
        for (let i = 0; i < list_onibus.length; i++) {
            let divCartao = document.createElement('div');// Criar o cartão principal
            divCartao.className = 'cartao_onibus';
            divCartao.addEventListener('click', ()=>{
              this.mapa.createRouts(i)  
            });
        
            // Criar a parte superior do cartão
            let divCartaoTop = document.createElement('div');
            divCartaoTop.className = 'cartao_top';
        
            // Criar o conteúdo da parte superior do cartão
            let topContent = document.createElement('div');        
            let h3 = document.createElement('h3');
            h3.textContent = list_onibus[i].rota;             
            topContent.appendChild(h3);
        
            // Adicionar o conteúdo superior ao divCartaoTop
            divCartaoTop.appendChild(topContent);
        
            // Criar a imagem para a parte superior
            let imgTop = document.createElement('img');
            imgTop.src = '/assets/icons/bus_icon.svg';
            divCartaoTop.appendChild(imgTop);
        
            // Adicionar a parte superior ao cartão
            divCartao.appendChild(divCartaoTop);
        
            // Criar a parte inferior do cartão
            let divCartaoBotton = document.createElement('div');
            divCartaoBotton.className = 'cartao_botton';
        
            // Criar o conteúdo da parte inferior do cartão
            let divPartida = document.createElement('div');
            divPartida.className = 'partida';        
            let h5Partida = document.createElement('h5');
            h5Partida.textContent = 'Local Partida';        
            let pPartida = document.createElement('p');
            pPartida.textContent = 'Partida';        
            divPartida.appendChild(h5Partida);
            divPartida.appendChild(pPartida);        
            let imgArrow = document.createElement('img');
            imgArrow.src = '/assets/icons/flecha.svg';        
            let divDestino = document.createElement('div');
            divDestino.className = 'destino';        
            let h5Destino = document.createElement('h5');
            h5Destino.textContent = 'Local Destino';        
            let pDestino = document.createElement('p');
            pDestino.textContent = 'Destino';        
            divDestino.appendChild(h5Destino);
            divDestino.appendChild(pDestino);
        
            // Adicionar os elementos à parte inferior do cartão
            divCartaoBotton.appendChild(divPartida);
            divCartaoBotton.appendChild(imgArrow);
            divCartaoBotton.appendChild(divDestino);
        
            // Adicionar a parte inferior ao cartão
            divCartao.appendChild(divCartaoBotton);
        
            // Adicionar o cartão ao contêiner
            
            this.cartoes_onibus.appendChild(divCartao);
        }
    }

    searchBus(){
        const searchWord = this.searchBusInput.value.toLowerCase();
        const result = this.mapa.rotas.filter(rota => rota.rota.toLowerCase().includes(searchWord));
        this.createBusList(result);
    }
}




