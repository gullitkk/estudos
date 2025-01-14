function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img') //ponto antes pra indicar que e uma classe// 
    let botao = game.querySelector('.dashboard__item__button') // so coloca ponto no querry selector//

    if (botao.classList.contains('dashboard__item__button--return')) {
        if (confirm('Você tem certeza que deseja fazer a devolução desse jogo?')) { //cria uma pergunta se o usuario tem certeza daquela ação// 
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent ='Alugar';
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent ='Devolver';
        
}
}
