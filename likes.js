let products = [];

async function getProducts() {
    let savedProducts = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).favorites
    if (savedProducts) {
        let data = savedProducts
        parseDataToProducts(data);
    }
}

function parseDataToProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let productSaved = isProductSaved(map["albumName"]);
        let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map["year"], map["songs"], map["songs2"], map["label"], map["format"], map["colour"], productSaved);
        products.push(product);
    }
    renderAllProducts(products);
}

function renderAllProducts(products) {
    let container = document.getElementById("fav");
    container.innerHTML = ""; // Limpiar el contenedor

    // Verificar si hay productos
    if (products.length === 0) {
        container.innerHTML = 'No items added to favorites'; 
    } else {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            container.innerHTML += product.htmlCard(i);
        }
    }
}

function productSelected(pos) {
    let productSelected = products[pos]
    window.location = "./detalleProducto.html?name=" + productSelected.albumName
}

function selected(pos) {
    let product = products[pos];
    let savedProducts = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).favorites
    let currentUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")))
    let list = savedProducts ? savedProducts : [];

    if (!product.saved) {
        product.saved = true;
        let map = product.toMap();
        list.push(map);
    } else {
        product.saved = false;
        list = list.filter(p => p.albumName !== product.albumName);
    }

    currentUser.favorites = list
    localStorage.setItem(currentUser.user, JSON.stringify(currentUser));
    products = products.filter(p => p.saved); 
    renderAllProducts(products);
}

function isProductSaved(albumName) {
    let savedProducts = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).favorites
    if (savedProducts) {
        let list = savedProducts
        for (let i = 0; i < list.length; i++) {
            let obj = list[i];
            if (obj["albumName"] === albumName) {
                return true;
            }
        }
    }
    return false;
}

getProducts();
