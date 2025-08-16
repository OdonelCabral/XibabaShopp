
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCart = document.getElementById('close-cart');

document.querySelectorAll('.add-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.getAttribute('data-name');
    const price = parseFloat(btn.getAttribute('data-price'));
    cart.push({name, price});
    updateCartUI();
  });
});

document.querySelectorAll('.wh-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.getAttribute('data-name');
    const number = '258861989189';
    const text = encodeURIComponent('Olá, tenho interesse no produto: ' + name + ' - enviado pelo site Xibaba.');
    window.open('https://wa.me/' + number + '?text=' + text, '_blank');
  });
});

function updateCartUI(){
  cartCount.innerText = cart.length;
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach((it, idx)=>{
    total += it.price;
    const div = document.createElement('div');
    div.innerHTML = `<p>${it.name} - MT ${it.price} <button onclick="removeItem(${idx})">Remover</button></p>`;
    cartItemsDiv.appendChild(div);
  });
  cartTotalSpan.innerText = total;
}

function removeItem(idx){
  cart.splice(idx,1);
  updateCartUI();
}

cartBtn.addEventListener('click', ()=>{
  cartModal.classList.remove('modal-hidden');
  cartModal.style.display = 'flex';
});

closeCart.addEventListener('click', ()=>{
  cartModal.classList.add('modal-hidden');
  cartModal.style.display = 'none';
});

const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContact = document.getElementById('close-contact');
document.getElementById('close-contact').addEventListener('click', ()=>{
  contactModal.classList.add('modal-hidden');
  contactModal.style.display = 'none';
});
contactBtn.addEventListener('click', ()=>{
  contactModal.classList.remove('modal-hidden');
  contactModal.style.display = 'flex';
});

checkoutBtn.addEventListener('click', ()=>{
  if(cart.length === 0){ alert('Carrinho vazio'); return; }
  let message = 'Olá, quero fazer o pedido:\n';
  cart.forEach(it => {
    message += `- ${it.name} : MT ${it.price}\n`;
  });
  message += 'Total: MT ' + cart.reduce((s,i)=>s+i.price,0);
  const choose = confirm('Enviar pedido via WhatsApp para José (sim) ou para Odonel (não)?\nOK = José (negociação/delivery), Cancel = Odonel (atendimento geral)');
  let number = choose ? '258879493304' : '258861989189';
  window.open('https://wa.me/' + number + '?text=' + encodeURIComponent(message), '_blank');
});

document.querySelectorAll('.wa-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const num = a.getAttribute('data-number');
    const txt = encodeURIComponent('Olá, estou a contactar pelo site Xibaba. Preciso de ajuda.');
    window.open('https://wa.me/' + num + '?text=' + txt, '_blank');
  });
});
