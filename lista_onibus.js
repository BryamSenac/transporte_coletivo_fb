function exibirAlerta() {
    alert('Cartão clicado!');
}

for(let i = 0; i < 50 ;i++){// Criar o cartão principal
let divCartao = document.createElement('div');
divCartao.className = 'cartao_onibus';
divCartao.addEventListener('click', exibirAlerta);

// Criar a parte superior do cartão
let divCartaoTop = document.createElement('div');
divCartaoTop.className = 'cartao_top';

// Criar o conteúdo da parte superior do cartão
let topContent = document.createElement('div');

let h3 = document.createElement('h3');
h3.textContent = 'Nome do Ônibus';

let h6 = document.createElement('h6');
h6.textContent = 'placa';

topContent.appendChild(h3);
topContent.appendChild(h6);

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
let cartoes_onibus = document.getElementById('cartoes_onibus');
cartoes_onibus.appendChild(divCartao);}


