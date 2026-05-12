function gerarCartao() {
    // Coleta dos dados
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tema = document.getElementById('tema').value;
    
    if (!nome || !idade) {
        alert("Por favor, preencha o nome e a idade!");
        return;
    }

    // Referências do Cartão
    const cartao = document.getElementById('cartao-resultado');
    const displayNome = document.getElementById('display-nome');
    const displayIdade = document.getElementById('display-idade');

    // Atualização do conteúdo
    displayNome.innerHTML = `<strong>${nome}</strong>`;
    displayIdade.innerText = `Hoje você celebra ${idade} anos de vida!`;

    // Aplicação do tema
    cartao.className = `cartao ${tema}`;
    
    // Exibir o cartão
    cartao.classList.remove('hidden');
}
