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

    });
}

function gerarListagem() {
    let listagem = document.getElementById("listagem");

    let listagemHTML = "";

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    medicamentos.map((medicamento) => {
        listagemHTML += `
            <div class="card">
                <div class="favorito">
                    <div class="desconto">
                        <span>${medicamento.desconto}%</span>
                    </div>

                    <button class="icon" onclick="clicarFavorito('${medicamento.id}')">
                        <i class="fa-regular fa-heart" id="heart" data-id=${medicamento.id}></i>
                    </button>
                </div>

                <div class="card-image">
                    <img 
                    src="${medicamento.urlImage}" 
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
                    <div class="relative">
                        <button class="btn" onClick="removerDaListagem('${medicamento.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>

                        <button class="btn" onClick="adicionarCarrinho('${medicamento.id}')">
                            adicionar
                            <i class="fa-solid fa-shopping-cart"></i>
                        </button>
                    </div>
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

function adicionarCarrinho(id) {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentoCarrinho = medicamentos.find((medicamento) => medicamento.id === id);

    if (medicamentoCarrinho) {
        medicamentoCarrinho.carrinho = true;
    }

    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

    gerarListagem();
}

function voltarCadastrar() {
    window.location.href = "index.html";
}

// Remover da listagem
function removerDaListagem(id) {

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentosAtualizados = medicamentos.filter((medicamento) => medicamento.id !== id);

    localStorage.setItem("medicamentos", JSON.stringify(medicamentosAtualizados));

    gerarListagem();
}
