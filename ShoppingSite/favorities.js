const favoriproducts = document.getElementById('favoriproducts');


function getCart () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    favoriproducts.innerHTML = ''
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "favoriBox";
        card.innerHTML = `
                  <img src="${item.thumbnail}" alt="">
                  <div class="favoriTextBox">
                      <p>${item.price} $</p>
                  </div>
                  <button onclick="removeItem(${index})">Remove</button>
              `;
              favoriproducts.appendChild(card);
      });
}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}
