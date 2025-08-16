
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    salvarCarrinho();
    alert(nome + " foi adicionado ao carrinho!");
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
    let lista = document.getElementById("lista-carrinho");
    let totalElement = document.getElementById("total");
    lista.innerHTML = "";
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let total = 0;
    carrinho.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nome + " - " + item.preco + " MZN";
        lista.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = "Total: " + total + " MZN";
}

window.onload = carregarCarrinho;
