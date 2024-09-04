document.addEventListener("DOMContentLoaded", gerarListagem);

function clicarFavorito(id) {
    // Seleciona todos os elementos div com atributo data-id
    const favoritos = document.querySelectorAll('i[data-id]');

    // Percorre todos os elementos
    favoritos.forEach((elemento) => {
        // Pega o valor do atributo data-id
        const dataId = elemento.getAttribute('data-id');

        // Verifica se o elemento clicado é um favorito
        if (dataId === id) {
            // Adiciona ou remove a classe fa-solid
            elemento.classList.toggle('fa-solid');
            elemento.classList.toggle('fa-regular');

           // chamando funcao Salva o favorito no localStorage
            salvarFavoritoLocalstorage(id);
        }

        gerarListagem();
    });
}

function gerarListagem() {
    let listagem = document.getElementById("listagem-favorito");

    let listagemHTML = "";

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    contagemFavoritos();

    const medicamentosFavoritos = medicamentos.filter((medicamento) => medicamento.favorito === true);

    if (medicamentosFavoritos.length === 0) {
        listagemHTML = `
            <div class="no-data">
                <img src="image/semdados.png" alt="Nenhum dado disponível">
                <h2 class="no-data-h2">Sem medicamentos no momento.</h2>
                <p class="no-data-p">Esta seção não contém dados no momento.</p>
                <button class="btn" onclick="voltarListagem()">
                    <i class="fa-solid fa-backward"></i>
                    Voltar para Listagem
                </button>
            </div>
        `;

        listagem.innerHTML = listagemHTML;

        return;
    }

    medicamentosFavoritos.map((medicamento) => {
        listagemHTML += `
            <div class="card">
                <div class="favorito">
                    <div class="desconto">
                        <span>${medicamento.desconto}%</span>
                    </div>

                    <button class="icon" onclick="clicarFavorito('${medicamento.id}')">
                        <i class="fa-solid fa-heart" id="heart" data-id=${medicamento.id}></i>
                    </button>
                </div>

                <div class="card-image">
                    <img 
                    src="https://drogariacatarinense.vteximg.com.br/arquivos/ids/171561-500-500/723201_.jpg?v=637515128134970000" 
                    alt="Imagem do medicamento">
                </div>

                <div class="card-content">
                    <h2 class="card-title">
                        ${medicamento.nome}
                    </h2>
                    <h3 class="categoria">
                        ${medicamento.categoria}
                    </h3>
                    <p class="card-laboratory">
                        ${medicamento.laboratorio}
                    </p>
                    <p class="card-price">
                       R$ ${medicamento.preco}
                    </p>
                    <button class="btn" onClick="adicionarCarrinho('${medicamento.id}')">
                        adicionar
                        <i class="fa-solid fa-shopping-cart"></i>
                    </button>
                </div>>
            </div>`
    });

    listagem.innerHTML = listagemHTML;
}

 // Salva o favorito no localStorage
function salvarFavoritoLocalstorage(id) {

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentoFavorito = medicamentos.find((medicamento) => medicamento.id === id);

    if (medicamentoFavorito) {
        medicamentoFavorito.favorito = !medicamentoFavorito.favorito;
    }

    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));
}

function contagemFavoritos() {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentosFavorito = medicamentos.filter((medicamento) => medicamento.favorito === true);

    const quantidade = medicamentosFavorito.length;

    const totalMedicamnetosFavorito = document.getElementById("total-quantity-favorite");

    quantidadeHTML = `<span>${quantidade} medicamento(s) nos favoritos</span>`;

    totalMedicamnetosFavorito.innerHTML = quantidadeHTML
}

function voltarListagem() {
    window.location.href = "listagem.html";
}

function adicionarCarrinho(id) {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentoCarrinho = medicamentos.find((medicamento) => medicamento.id === id);

    if (medicamentoCarrinho) {
        medicamentoCarrinho.carrinho = true;
    }

    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

    gerarListagem();
}