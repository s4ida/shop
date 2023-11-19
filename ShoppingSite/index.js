const customers = document.getElementById("customers");
const cartButton = document.querySelector('.cartButton')

axios.get('https://dummyjson.com/products')
.then(res => {
    db = res.data.products;
    console.log(db);
    db.map((item) => {
        let card = document.createElement('div');
        card.className = "cardBox";
        card.innerHTML = `
        <button class="addtofavori" onclick="addToCart(${item.id})" class="heartitem"><i class="fa-regular fa-heart fa-lg" style="color: #175cd3;"></i></button>
            <img src="${item.thumbnail}" alt="">
            <div class="cardTextBox">
                <p>${item.price} $</p>
            </div>
            <button class="add" onclick="addToCart(${item.id})">Add to cart</button>
        `;
        customers.appendChild(card);
    });
});

if (cartCountElement) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length.toString();
};
function addToCart(productIndex) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push(db.find(item => item.id === productIndex));
localStorage.setItem('cart', JSON.stringify(cart));
displayCartCount()
}

function displayCartCount () {
let cart = JSON.parse(localStorage.getItem('cart')) || []
cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping" style="font-size: 20px;"></i><p class="cartCount">${cart.length}</p>`
}

window.onload = () => {
displayCartCount()
}