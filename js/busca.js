const buscaInput = document.getElementById('texto_input');
const buscaBtn = document.getElementById('pesquisar_btn');

const bairros = [
    "Centro", "São Miguel", "Vila Nova", "Conjunto São Cristóvão", "Vila Verde",
    "Jardim Europa", "Vila Bela", "Centro", "Jardim Itália", "São Francisco",
    "Vila Nova", "Jardim Primavera", "Jardim das Américas", "Vila Verde", "Conjunto São Cristóvão",
    "Jardim Itália", "Centro", "São Francisco", "Vila Bela", "Vila Nova",
    "Jardim Europa", "Jardim das Américas", "São Miguel", "Centro", "Jardim Primavera",
    "Vila Bela", "São Francisco", "Jardim Europa", "Vila Nova", "Vila Verde",
    "Conjunto São Cristóvão", "Centro", "São Miguel", "Jardim Primavera", "Jardim Itália",
    "Jardim das Américas", "São Francisco", "Vila Bela", "Vila Verde", "Jardim Europa",
    "Vila Nova", "Centro", "São Miguel", "Conjunto São Cristóvão", "Jardim Primavera",
    "Jardim Itália", "São Francisco", "Vila Bela", "Vila Nova", "Centro",
    "Centro", "São Miguel", "Vila Nova", "Conjunto São Cristóvão", "Vila Verde",
    "Jardim Europa", "Vila Bela", "Centro", "Jardim Itália", "São Francisco",
    "Vila Nova", "Jardim Primavera", "Jardim das Américas", "Vila Verde", "Conjunto São Cristóvão",
    "Jardim Itália", "Centro", "São Francisco", "Vila Bela", "Vila Nova",
    "Jardim Europa", "Jardim das Américas", "São Miguel", "Centro", "Jardim Primavera",
    "Vila Bela", "São Francisco", "Jardim Europa", "Vila Nova", "Vila Verde",
    "Conjunto São Cristóvão", "Centro", "São Miguel", "Jardim Primavera", "Jardim Itália",
    "Jardim das Américas", "São Francisco", "Vila Bela", "Vila Verde", "Jardim Europa",
    "Vila Nova", "Centro", "São Miguel", "Conjunto São Cristóvão", "Jardim Primavera",
    "Jardim Itália", "São Francisco", "Vila Bela", "Vila Nova", "Centro",
    "São Francisco", "Centro", "Vila Nova", "Jardim das Américas", "Jardim Itália",
    "Jardim Primavera", "Vila Verde", "Vila Bela", "Conjunto São Cristóvão", "São Miguel",
    "Jardim Europa", "Centro", "Vila Nova", "Conjunto São Cristóvão", "Jardim Primavera",
    "Vila Bela", "Centro", "Jardim das Américas", "Vila Verde", "Jardim Itália"
];
// Função de busca
function buscar() {
    const termoBusca = buscaInput.value.toLowerCase();
    const resultados = bairros.filter(bairro => bairro.toLowerCase().includes(termoBusca)); // Filtra os bairros que contêm o termo de busca
    resultadoView(resultados.length, resultados);
}
function resultadoView(number, filter) {
    // Exibe os resultados em um alerta
    if(buscaInput.value === ''){
        alert('Digite qual bairro você procura.');
    }
    else if (number > 0) {
        alert('Resultados encontrados:\n' + filter.join('\n'));
    } else {
        alert('Nenhum bairro encontrado.');
    }
}
buscaBtn.addEventListener('click', () => {
    buscar(); // Chama a função de busca após o alerta
});
