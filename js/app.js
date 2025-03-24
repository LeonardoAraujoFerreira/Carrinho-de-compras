let valorTotal = 0;

function adicionar() {
    let produto = document.getElementById('produto').value
    let nomeDoProduto = produto.split('-') [0]
    let valorDoProduto = produto.split('R$') [1]
    let quantidade = document.getElementById('quantidade').value
    let preco = quantidade * valorDoProduto
    let listaProdutos = document.getElementById('lista-produtos')
    if (quantidade <= 0) {
      alert('Insira um valor válido!')
    } else {
      listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
    </section>`
    }
    valorTotal = valorTotal + preco 
    let precoTotal = document.getElementById('valor-total')
    precoTotal.textContent = `R$ ${valorTotal}`
}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos')
    listaProdutos.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> </span>  <span class="texto-azul"></span>
        </section>`
    valorTotal = 0
    let precoTotal = document.getElementById('valor-total')
    precoTotal.textContent = `R$ ${valorTotal}`
}