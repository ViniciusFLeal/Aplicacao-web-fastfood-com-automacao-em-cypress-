// Produtos disponíveis
const produtos = [
    { id: 1, nome: 'Hambúrguer', preco: 15.00 },
    { id: 2, nome: 'Batata Frita', preco: 8.00 },
    { id: 3, nome: 'Refrigerante', preco: 6.00 },
    { id: 4, nome: 'Milkshake', preco: 12.00 }
];

let pedido = [];

function atualizarListaProdutos() {
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = '';
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
            <button onclick="adicionarProduto(${produto.id})">Adicionar</button>`;
        lista.appendChild(li);
    });
}

function adicionarProduto(id) {
    const existente = pedido.find(p => p.id === id);
    if (existente) {
        existente.qtd += 1;
    } else {
        const prod = produtos.find(p => p.id === id);
        pedido.push({ ...prod, qtd: 1 });
    }
    atualizarResumoPedido();
}

function alterarQuantidade(id, delta) {
    const item = pedido.find(p => p.id === id);
    if (!item) return;
    item.qtd += delta;
    if (item.qtd <= 0) {
        pedido = pedido.filter(p => p.id !== id);
    }
    atualizarResumoPedido();
}

function removerProduto(id) {
    pedido = pedido.filter(p => p.id !== id);
    atualizarResumoPedido();
}

function atualizarResumoPedido() {
    const resumo = document.getElementById('resumo-pedido');
    const totalDiv = document.getElementById('total-pedido');
    if (pedido.length === 0) {
        resumo.innerHTML = 'Nenhum produto adicionado ao pedido';
        totalDiv.innerHTML = '';
        return;
    }
    let html = '<table class="pedido-table"><tr><th>Produto</th><th>Qtd</th><th>Preço Unit.</th><th>Ações</th></tr>';
    pedido.forEach(item => {
        html += `<tr>
            <td>${item.nome}</td>
            <td>${item.qtd}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>
                <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
                <button onclick="removerProduto(${item.id})">Remover</button>
            </td>
        </tr>`;
    });
    html += '</table>';
    resumo.innerHTML = html;
    const total = pedido.reduce((acc, item) => acc + item.preco * item.qtd, 0);
    totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

function confirmarPedido() {
    if (pedido.length === 0) {
        mostrarMensagem('Nenhum produto adicionado ao pedido');
        return;
    }
    // Mensagem "Produto em preparo" piscando em verde por 5 segundos
    exibirMensagemPiscando('Produto em preparo', 5000, '#388e3c', () => {
        // Após 5s, mostrar mensagem de entrega por 5s
        exibirMensagemFixa('Seu lanche já saiu para entrega, BOM APETITE!!', 5000, () => {
            // Após mais 5s, volta ao painel de pedidos
            pedido = [];
            atualizarResumoPedido();
            limparMensagem();
        });
    });
}

function cancelarPedido() {
    pedido = [];
    atualizarResumoPedido();
    mostrarMensagem('Pedido cancelado');
}


function mostrarMensagem(msg) {
    const div = document.getElementById('mensagem');
    div.textContent = msg;
    div.style.background = '';
    div.style.color = '#d32f2f';
    setTimeout(() => { div.textContent = ''; div.style.background = ''; }, 2500);
}

function exibirMensagemPiscando(texto, tempo, cor, callback) {
    const div = document.getElementById('mensagem');
    let visivel = true;
    div.textContent = texto;
    div.style.background = cor;
    div.style.color = '#fff';
    let interval = setInterval(() => {
        visivel = !visivel;
        div.style.visibility = visivel ? 'visible' : 'hidden';
    }, 400);
    setTimeout(() => {
        clearInterval(interval);
        div.style.visibility = 'visible';
        div.textContent = '';
        div.style.background = '';
        if (callback) callback();
    }, tempo);
}

function exibirMensagemFixa(texto, tempo, callback) {
    const div = document.getElementById('mensagem');
    div.textContent = texto;
    div.style.background = '#1976d2';
    div.style.color = '#fff';
    setTimeout(() => {
        div.textContent = '';
        div.style.background = '';
        if (callback) callback();
    }, tempo);
}

function limparMensagem() {
    const div = document.getElementById('mensagem');
    div.textContent = '';
    div.style.background = '';
    div.style.color = '';
    div.style.visibility = 'visible';
}

// Eventos
window.onload = function() {
    atualizarListaProdutos();
    atualizarResumoPedido();
    document.getElementById('confirmar-pedido').onclick = confirmarPedido;
    document.getElementById('cancelar-pedido').onclick = cancelarPedido;
};
