const inputNome = document.getElementById('inputNome');
const inputIdade = document.getElementById('inputIdade');
const cardNome = document.getElementById('cardNome');
const cardIdade = document.getElementById('cardIdade');
const mainCard = document.getElementById('mainCard');
const colorDots = document.querySelectorAll('.color-dot');

// Atualização em Tempo Real
inputNome.addEventListener('input', (e) => {
    cardNome.innerText = e.target.value || "Seu Nome";
});

inputIdade.addEventListener('input', (e) => {
    if(e.target.value) {
        cardIdade.innerText = `Parabéns pelos seus ${e.target.value} anos!`;
    } else {
        cardIdade.innerText = "Feliz Aniversário!";
    }
});

// Troca de Temas
colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
        // Remove classe ativa de todos
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // Pega o tema do data-attribute
        const theme = dot.getAttribute('data-theme');
        
        // Remove as classes de tema antigas e adiciona a nova
        mainCard.className = `card-preview ${theme}`;
    });
});

// Feedback de Salvamento
document.getElementById('btnDownload').addEventListener('click', () => {
    alert("✨ Card pronto! Em um sistema real, aqui geraríamos o PDF ou imagem para você.");
});
