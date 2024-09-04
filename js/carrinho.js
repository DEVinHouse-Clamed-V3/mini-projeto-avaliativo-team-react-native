document.addEventListener('DOMContentLoaded', gerarListagemCarrinho)

function gerarListagemCarrinho() {
    let listagem = document.getElementById("listagem-compras");

    let listagemHTML = "";

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    contagemCarrinho();

    valorTotalComprra();

    const medicamentosCarrinho = medicamentos.filter((medicamento) => medicamento.carrinho === true);

    if (medicamentosCarrinho.length === 0) {
        listagemHTML = `
            <div class="no-data">
                <img src="image/semdados.png" alt="Nenhum dado disponível">
                <h2 class="no-data-h2">Não há medicamentos no carrinho</h2>
                <p class="no-data-p">O carrinho esta vazio no momento.</p>
                <button class="btn" onclick="voltarListagem()">
                    <i class="fa-solid fa-backward"></i>
                    Voltar para Listagem
                </button>
            </div>
        `;

        listagem.innerHTML = listagemHTML;

        return;
    }

    medicamentosCarrinho.map((medicamento) => {
        listagemHTML += `
            <div class="produto">
                <div class="imagem">
                    <img src="${medicamento.urlImage}" alt="imagem do medicamento">
                </div>

                <div class="product-content">
                    <div class="descricao">
                        <h2 class="product-title">${medicamento.nome}</h2>
                        <spa class="product-quantity">Quantidade: 1</spa>
                        <span class="product-price">R$ ${medicamento.preco}</span>
                    </div>
                    <div class="acoes">
                        <button class="btn" onClick="removerDoCarrinho('${medicamento.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>`
    });

    listagem.innerHTML = listagemHTML;
}

function removerDoCarrinho(id) {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentosAtualizados = medicamentos.map((medicamento) => {
        if (medicamento.id === id) {
            return {
                ...medicamento,
                carrinho: false
            }
        }
    
        return medicamento;
    });

    console.log(medicamentosAtualizados);

    localStorage.setItem("medicamentos", JSON.stringify(medicamentosAtualizados));

    gerarListagemCarrinho();

}

function finalizarCompra() {

    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    medicamentos.map((medicamento) =>{
        if (medicamento.carrinho === true) {
            medicamento.carrinho = false;
        }
    });    

    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

    alert("Compra finalizada com sucesso!");

    gerarListagemCarrinho();

    window.location.href = "listagem.html";
}

function contagemCarrinho() {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentosCarrinho = medicamentos.filter((medicamento) => medicamento.carrinho === true);

    const quantidade = medicamentosCarrinho.length;

    const totalMedicamnetosCarrinho = document.getElementById("total-quantity");

    quantidadeHTML = `<span>${quantidade} medicamento(s) no carrinho</span>`;

    totalMedicamnetosCarrinho.innerHTML = quantidadeHTML
}

function valorTotalComprra() {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];

    const medicamentosCarrinho = medicamentos.filter((medicamento) => medicamento.carrinho === true);

    const total = medicamentosCarrinho.reduce((acc, medicamento) => {
        return acc + medicamento.preco;
    }, 0);

    const totalCompra = document.getElementById("total-compra");

    totalCompraHTML = `
        <h2>total da compra</h2>
        <span class="product-price">R$ ${total.toFixed(2)}</span>
    `;

    totalCompra.innerHTML = totalCompraHTML;
}

function voltarListagem() {
    window.location.href = "listagem.html";
}