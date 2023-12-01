const store = [
    {
        id: 1,
        book: "../images/xmlBible.jpg",
        title: "XML Bible",
        author: "Winston",
        publication: "Wiely",
        price: "40.5",
    },
    {
        id: 2,
        book: "../images/aibook.webp",
        title: "XML Bible",
        author: "Winston",
        publication: "Wiely",
        price: "40.5",
    },
    {
        id: 3,
        book: "../images/java.webp",
        title: "XML Bible",
        author: "Winston",
        publication: "Wiely",
        price: "40.5",
    },
    {
        id: 4,
        book: "../images/html24.jpg",
        title: "XML Bible",
        author: "Winston",
        publication: "Wiely",
        price: "40.5",
    }
]

const addtoCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    let item = store.find((item) => item.id == id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added To Cart");
}

function displayBooks(store) {
    let booksContainer = document.getElementsByClassName("cataDis")[0];
    booksContainer.innerHTML = "";

    for (let i = 0; i < store.length; i++) {
        booksContainer.innerHTML += `
        <div class="books">
            
            <div class="booksImg">
                <img src="${store[i].book}" alt="">
            </div>
            <div class="bookAbout">
                Book: ${store[i].title}<br>
                Author: ${store[i].author}<br>
                Publication: ${store[i].publication}
            </div>
            <div class="price">
                <h4>&#36; ${store[i].price}</h4>
            </div>
            <div class="addCart">
                <button onclick="addtoCart(${store[i].id})">
                    <i class="fa-solid fa-cart-shopping"></i> Add TO CART
                </button>
            </div>
        </div>`;
    }
}