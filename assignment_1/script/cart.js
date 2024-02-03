function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    (()=>location.reload())()
}

function TotoalAmount(){
    var totalDiv = document.getElementsByClassName('cartAmount')[0];
    var storedValue = localStorage.getItem('cart');
    storedValue = JSON.parse(storedValue);
    let total = 0;
    for (let i = 0; i < storedValue.length; i++) {
        total += storedValue[i].price*storedValue[i].quantity;
    }
    totalDiv.innerHTML = `<h1>Total Amount: ${total}</h1>`;
}

function increment(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.find((i) => i.id ==  id && i.quantity < 10) ? cart.find((i) => i.id == id).quantity++ : cart.push(item);   
    localStorage.setItem("cart", JSON.stringify(cart));
    (()=>location.reload())()
}

function decrement(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.find((i) => i.id == id && i.quantity > 1) ? cart.find((i) => i.id == id).quantity-- : cart.push(item);;    
    localStorage.setItem("cart", JSON.stringify(cart));
    (()=>location.reload())()
}

function showCart (){
    var storedValue = localStorage.getItem('cart');
    storedValue = JSON.parse(storedValue);
    console.log(storedValue);
    var booksContainer = document.getElementsByClassName('cataDis')[0];
    for (let i = 0; i < storedValue.length; i++) {
        booksContainer.innerHTML += `
        <div class="books">
            <div class="bookAbout">
                Book: ${storedValue[i].title}<br>
                Author: ${storedValue[i].author}<br>
                Publication: ${storedValue[i].publication}
            </div>
            <div class="btns">
            <button onclick="decrement(${storedValue[i].id})"> - </button>
            <button onclick="increment(${storedValue[i].id})">+</button>
            </div>
                <p>Quantity: ${storedValue[i].quantity}</p>
                <h4>&#36; ${storedValue[i].price*storedValue[i].quantity}</h4>

                <button onclick="removeItem(${storedValue[i].id})">
                    <i class="fa-solid fa-cart-shopping"></i>Remove
                </button>
        </div>`;
    }
}