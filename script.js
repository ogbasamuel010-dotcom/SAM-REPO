const products = [
  {name:'Sola Desk Light', description:'Adaptive light for focused days.', price:'$129', tag:'Best seller', image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85'},
  {name:'Echo Mini', description:'A calm, capable home companion.', price:'$89', tag:'New', image:'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=85'},
  {name:'Aura Buds', description:'Sound that knows your surroundings.', price:'$149', tag:'Popular', image:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85'},
  {name:'Mori Air', description:'Pure air, made beautifully simple.', price:'$199', tag:'Wellness', image:'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=85'},
  {name:'Lumen Camera', description:'Capture the moment, intelligently.', price:'$249', tag:'New', image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85'},
  {name:'Kite Tracker', description:'Keep close to what matters most.', price:'$49', tag:'Everyday', image:'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=85'}
];
const grid = document.querySelector('#productGrid');
let cartCount = 0;
grid.innerHTML = products.map((product, index) => `<article class="product-card"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="tag">${product.tag}</span></div><div class="product-info"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="price">${product.price}</span></div><button class="add-button" data-index="${index}" type="button">Add to cart +</button></article>`).join('');
const toast = document.querySelector('#toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
grid.addEventListener('click', event => {if(!event.target.matches('.add-button')) return; const product=products[event.target.dataset.index]; cartCount++; document.querySelector('#cartCount').textContent=cartCount; document.querySelector('#cartButton').setAttribute('aria-label',`Shopping cart, ${cartCount} items`); event.target.textContent='Added ✓'; event.target.disabled=true; showToast(`${product.name} added to your cart`); setTimeout(()=>{event.target.textContent='Add to cart +';event.target.disabled=false},1200)});
document.querySelector('#cartButton').addEventListener('click',()=>showToast(cartCount ? `${cartCount} item${cartCount===1?'':'s'} in your cart` : 'Your cart is waiting for something clever'));
document.querySelector('#newsletterForm').addEventListener('submit',event=>{event.preventDefault();showToast('You’re on the list — welcome to NOVA');event.target.reset()});
