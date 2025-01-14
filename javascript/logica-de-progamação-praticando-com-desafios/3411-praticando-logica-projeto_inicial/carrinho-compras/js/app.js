 let valorTotal = 0;
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // o split quebra uma string, ela quebra usando como o parametro o item q tiver dentro dos paranteses no nosso casso e o - e pra vc selecionar a parte que vc quer caso seja a primeira e zero e caso seja a segunda e 1//
    let valorUnitario = produto.split('R$') [1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidade
    let itensCarrinho = document.getElementById('lista-produtos');
    itensCarrinho.innerHTML = itensCarrinho.innerHTML + `  <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    valorTotal = valorTotal + preco;
    let valorCarrinho = document.getElementById('valor-total');
    valorCarrinho.textContent = `Total R$ ${valorTotal}`;
    quantidade = document.getElementById('quantidade').value = 0
}   
function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 00'
}
