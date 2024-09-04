// Escutando o evento de submit do formulário
document.addEventListener('submit', salvarDados);

// Escutando o evento de input
document.addEventListener("input", validacoes);

function validacoes() {
    validandoNome();
    validandoLaboratorio();
    validandoCategoria();
    validandoPreco();
    validandoDesconto();
    validarUrlImagem();
}


// Capturando elementos do formulário
const nomeInput = document.getElementById('nome');
const laboratorioInput = document.getElementById('laboratorio');
const categoriaSelect = document.getElementById('categoria');
const precoInput = document.getElementById('preco');
const descontoInput = document.getElementById('desconto');
const urlInput = document.getElementById('urlImage');

// Capturando elemnetos de error
const errorMedicamento = document.getElementById('errorMedicamento');
const errorLaboratorio = document.getElementById('errorLaboratorio');
const errorPreco = document.getElementById('errorPreco');
const errorDesconto = document.getElementById('errorDesconto');
const errorUrl = document.getElementById('errorUrl');

function salvarDados(event) {
    
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const laboratorio = laboratorioInput.value.trim();
    const categoria = categoriaSelect.value;
    const preco = parseFloat( precoInput.value);
    const desconto = parseFloat(descontoInput.value);
    const url = urlInput.value.trim();

    // condicao para salvar no localStorage
    if (nome !== '' && laboratorio !== '' && !(nome.length < 3 || name.length > 75) && !(laboratorio.length < 3 || laboratorio.length > 75) && categoria !== '0' && preco !== null && !(isNaN(preco)) && !(preco <= 0) && desconto !== null && !(isNaN(desconto)) && !(desconto <= 0) && isValidURL(url)) {

        // salvando dados no local storage
        salvarLocalStorage(nome, categoria, laboratorio, preco, desconto, url)

        alert('Dados salvos com sucesso!');

        limpazaFormulario();    

        window.location.href = 'listagem.html';

    }  
}

// validando nome do medicamento em tempo real
function validandoNome() {

    const nome = nomeInput.value.trim();
    
    if (nome === '') {
        nomeInput.classList.add('error-input');
        errorMedicamento.innerText = 'Este campo é obrigatório';
    }
    else if (nome.length < 3 || name.length > 75) {
        nomeInput.classList.add('error-input');
        errorMedicamento.innerText = "O Nome deve ter entre 3 e 75 caracteres.\n";
    }else {
        errorMedicamento.innerText = "";
        nomeInput.classList.remove('error-input');
    }

}

// validando laboratório em tempo real
function validandoLaboratorio() {

    const laboratorio = laboratorioInput.value.trim();
    
    if (laboratorio === '') {
        laboratorioInput.classList.add('error-input');
        errorLaboratorio.innerText = 'Este campo é obrigatório';
    }
    else if (laboratorio.length < 3 || laboratorio.length > 75) {
        laboratorioInput.classList.add('error-input');
        errorLaboratorio.innerText = "O Laboratório deve ter entre 3 e 75 caracteres.\n";
    }else {
        errorLaboratorio.innerText = "";
        laboratorioInput.classList.remove('error-input');
    }

}

// validando categoria em tempo real
function validandoCategoria() {

    const categoria = categoriaSelect.value;
    
    if (categoria === '0') {
        categoriaSelect.classList.add('error-input');
        errorCategoria.innerText = 'Este campo é obrigatório';
    }
    else {
        errorCategoria.innerText = "";
        categoriaSelect.classList.remove('error-input');
    }

}

//valiodando preço em tempo real
function validandoPreco() {

    const preco = precoInput.value.trim();
    
    if (preco === null || isNaN(preco)) {
        precoInput.classList.add('error-input');
        errorPreco.innerText = 'Este campo é obrigatório';
    }
    else if (preco <= 0) {
        precoInput.classList.add('error-input');
        errorPreco.innerText = "O Preço deve ser maior que 0.\n";
    }else {
        errorPreco.innerText = "";
        precoInput.classList.remove('error-input');
    }

}

// Validando desconto em tempo real
function validandoDesconto() {
    const desconto = descontoInput.value.trim();
    
    if (desconto === null || isNaN(desconto)) {
        descontoInput.classList.add('error-input');
        errorDesconto.innerText = 'Este campo é obrigatório';
    }
    else if (desconto <= 0) {
        descontoInput.classList.add('error-input');
        errorDesconto.innerText = "O Desconto deve ser maior que 0.\n";
    }else {
        errorDesconto.innerText = "";
        descontoInput.classList.remove('error-input');
    }
}

// Validando URL da imagem em tempo real
function  validarUrlImagem() {

    const url = urlInput.value;
    
    if (isValidURL(url)) {
        errorUrl.innerText = "";
        urlInput.classList.remove('error-input');
    }
    else {
        urlInput.classList.add('error-input');
        errorUrl.innerText = 'Digite uma URL válida.';
    }
}

// Função para validar URL
function isValidURL(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
        '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domínio
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // ou IP (v4) 
        '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // porta e caminho
        '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-zA-Z\\d_]*)?$', 'i'); // fragmento
    return !!pattern.test(url);
}

// Salvando dados no LocalStorage
function salvarLocalStorage(nome, categoria, laboratorio, preco, desconto,url) {

    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    const medicamento = {
        id: crypto.randomUUID(),
        nome: nome,
        categoria: categoria,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false,
        carrinho: false,
        desconto: desconto,
        urlImage: url                   
    }

    medicamentos.push(medicamento);

    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
}


// redirecionando para a página de listagem
function redirecionarListagem() {
    window.location.href = 'listagem.html';
}

// limpando formulário
function limpazaFormulario() {
    nomeInput.value = '';
    laboratorioInput.value = '';
    categoriaSelect.value = '0';
    precoInput.value = '';
    descontoInput.value = '';
}
