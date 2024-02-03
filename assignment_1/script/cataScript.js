const store = [
    {
        id: 1,
        book: "../images/xmlBible.jpg",
        title: "<b>XML Bible</b>",
        author: "Winston",
        publication: "Wiely",
        price: 40.5,
        quantity: 1,
        branch: "CSE"
    },
    {
        id: 2,
        book: "../images/aibook.webp",
        title: "<b>Artificial Intelligence <br/> A Modern Approach</b>",
        author: "<b>Winston</b>",
        publication: "Wiely",
        price: 40.5,
        quantity: 1,
        branch: "CSE"
    },
    {
        id: 3,
        book: "../images/java.webp",
        title: "<b>Java 2</b>",
        author: "Winston",
        publication: "Wiely",
        price: 40.5,
        quantity: 1,
        branch: "CSE"
    },
    {
        id: 4,
        book: "../images/html24.jpg",
        title: "<b>Web Publising <br/> with HTML 4</b>",
        author: "Winston",
        publication: "Wiely",
        price: 40.5,
        quantity: 1,
        branch: "CSE"
    
    },
    {
        id: 5,
        book: "../images/microelectronicCircuits.jpg",
        title: "<b>Microelectronic Circuits</b>",
        author: "Adel S. Sedra, Kenneth C. Smith",
        publication: "Oxford University Press",
        price: 75.0,
        quantity: 1,
        branch: "ECE"
    },
    {
        id: 6,
        book: "../images/dspPrinciplesAlgorithms.jpg",
        title: "<b>DSP: Principles, Algorithms, and Applications</b>",
        author: "Proakis, John G.; Manolakis, Dimitris G.",
        publication: "Pearson",
        price: 90.0,
        quantity: 1,
        branch: "ECE"
    },
    {
        id: 7,
        book: "../images/computerOrganizationDesign.jpg",
        title: "<b>Computer Organization and Design</b>",
        author: "David A. Patterson, John L. Hennessy",
        publication: "Morgan Kaufmann",
        price: 85.0,
        quantity: 1,
        branch: "ECE"
    },
    {
        id: 8,
        book: "../images/communicationSystems.jpg",
        title: "<b>Communication Systems</b>",
        author: "Simon Haykin",
        publication: "John Wiley & Sons",
        price: 65.0,
        quantity: 1,
        branch: "ECE"
    },
    {
        id: 9,
        book: "../images/electricMachinery.jpg",
        title: "<b>Electric Machinery Fundamentals</b>",
        author: "Stephen J. Chapman",
        publication: "McGraw-Hill",
        price: 80.0,
        quantity: 1,
        branch: "EE"
    },
    {
        id: 10,
        book: "../images/powerSystemAnalysis.jpg",
        title: "<b>Power System Analysis</b>",
        author: "John J. Grainger, William D. Stevenson Jr.",
        publication: "McGraw-Hill",
        price: 95.0,
        quantity: 1,
        branch: "EE"
    },
    {
        id: 11,
        book: "../images/electronicDevicesCircuits.jpg",
        title: "<b>Electronic Devices and Circuit Theory</b>",
        author: "Robert L. Boylestad, Louis Nashelsky",
        publication: "Pearson",
        price: 70.0,
        quantity: 1,
        branch: "EE"
    },
    {
        id: 12,
        book: "../images/signalProcessingLinearSystems.jpg",
        title: "<b>Signal Processing and Linear Systems</b>",
        author: "B.P. Lathi",
        publication: "Oxford University Press",
        price: 85.0,
        quantity: 1,
        branch: "EE"
    },
    {
        id: 13,
        book: "../images/structuralAnalysis.jpg",
        title: "<b>Structural Analysis</b>",
        author: "Russell C. Hibbeler",
        publication: "Pearson",
        price: 75.0,
        quantity: 1,
        branch: "CE"
    },
    {
        id: 14,
        book: "../images/geotechnicalEngineering.jpg",
        title: "<b>Principles of Geotechnical Engineering</b>",
        author: "Braja M. Das",
        publication: "Cengage Learning",
        price: 90.0,
        quantity: 1,
        branch: "CE"
    },
    {
        id: 15,
        book: "../images/environmentalEngineering.jpg",
        title: "<b>Introduction to Environmental Engineering</b>",
        author: "Mackenzie Davis, David Cornwell",
        publication: "McGraw-Hill",
        price: 80.0,
        quantity: 1,
        branch: "CE"
    },
    {
        id: 16,
        book: "../images/transportationEngineering.jpg",
        title: "<b>Principles of Transportation Engineering</b>",
        author: "Partha Chakroborty, Animesh Das",
        publication: "Cengage Learning",
        price: 85.0,
        quantity: 1,
        branch: "CE"
    }

]
const addtoCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    let item = store.find((item) => item.id == id);
    cart.find((i) => i.id == id) ? cart.find((i) => i.id == id).quantity++ : cart.push(item);;    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added To Cart");
}
let branch = "CSE"
function CSE () {
    branch = "CSE"
    console.log(branch)
    displayBooks()
}
function ECE () {
    branch = "ECE"
    console.log(branch)
    displayBooks()
}
function EE () {
    branch = "EE"
    console.log(branch)
    displayBooks()
}
function CE () {    
    branch = "CE"
    console.log(branch)
    displayBooks()
}
console.log(branch)
function displayBooks(store) {
    let booksContainer = document.getElementsByClassName("cataDis")[0];
    booksContainer.innerHTML = "";

     store.map((item, i) => {
        store[i].branch == branch ? 
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
        </div>` : "";
    })
}