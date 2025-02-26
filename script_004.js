document.addEventListener("DOMContentLoaded", function() {
    const board = document.querySelector('.board');

    // Dados dos jogadores com nomes e nomes das imagens
    const players = [
        { name: "Davi Silva"        , position: 7, image: "03.png" },
        { name: "Emilson Rocha"     , position: 5, image: "04.png" },
        { name: "Isabela Silva"     , position: 1, image: "05.png" },
        { name: "Izac Assunpção"    , position: 8, image: "06.png" },
        { name: "Josimere Silva"    , position: 3, image: "07.png" },
        { name: "Karine Santos"     , position: 4, image: "08.png" },
        { name: "Lorraine Valente"  , position: 7, image: "09.png" },
        { name: "Marcelo Cruz"      , position: 8, image: "10.png" },
        { name: "Mariana Luiz"      , position: 1, image: "11.png" },
        { name: "Milena Menezes"    , position: 2, image: "12.png" },
        { name: "Patricia Souza"    , position: 1, image: "13.png" },
        { name: "Phillip Palhares"  , position: 8, image: "Phillip.jpg" },
        { name: "Raica Pereira"     , position: 3, image: "15.png" },
        { name: "Samuel Oliveira"   , position: 4, image: "16.png" },
        { name: "Andre Oliveira"    , position: 50, image: "AndreOliveira.png" }
    ];

    // Criação das casas do tabuleiro
    const totalCells = 50;
    const cells = [];
    for (let i = 1; i <= totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Adiciona o número da casa abaixo da célula
        const cellNumber = document.createElement('div');
        cellNumber.classList.add('cell-number');
        cellNumber.textContent = i;
        cell.appendChild(cellNumber);

        // Container para os jogadores dentro da célula
        const playersContainer = document.createElement('div');
        playersContainer.classList.add('players-container');
        cell.appendChild(playersContainer);

        board.appendChild(cell);
        cells.push({ cell, playersContainer });
    }

    // Criação do modal para exibir a imagem em tamanho grande e o nome do jogador
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-image" src="" alt="Jogador">
            <div class="modal-name"></div> <!-- Elemento para exibir o nome do jogador -->
        </div>
    `;
    document.body.appendChild(modal);

    // Função para abrir o modal com a imagem e o nome do jogador
    function openModal(imageSrc, playerName) {
        const modalImage = modal.querySelector('.modal-image');
        const modalName = modal.querySelector('.modal-name');
        modalImage.src = imageSrc;
        modalImage.alt = playerName;
        modalName.textContent = playerName; // Exibe o nome do jogador
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Fechar o modal ao clicar no botão de fechar (×)
    modal.querySelector('.close').addEventListener('click', closeModal);

    // Fechar o modal ao clicar fora da imagem
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Posiciona os jogadores nas casas corretas
    players.forEach(player => {
        const { playersContainer } = cells[player.position - 1]; // Pega o container de jogadores da casa correspondente
        const playerElement = document.createElement('img');
        playerElement.classList.add('player');
        playerElement.src = `images/${player.image}`; // Caminho da imagem do jogador
        playerElement.alt = player.name; // Texto alternativo para acessibilidade
        playerElement.title = player.name; // Tooltip com o nome completo

        // Adiciona o evento de clique para abrir o modal
        playerElement.addEventListener('click', () => {
            openModal(playerElement.src, player.name);
        });

        playersContainer.appendChild(playerElement);
    });
});
