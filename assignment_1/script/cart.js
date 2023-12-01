function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
            <div class="price">
                <h4>&#36; ${storedValue[i].price}</h4>
            </div>
            <div class="addCart">
                <button onclick="removeItem(${storedValue[i].id})">
                    <i class="fa-solid fa-cart-shopping"></i>Remove
                </button>
            </div>
        </div>`;
    }
}