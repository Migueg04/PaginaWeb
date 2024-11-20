let products = []


async function getProducts() {
    let response = await fetch("https://raw.githubusercontent.com/Migueg04/PaginaWeb/refs/heads/main/data.json")
    let data = await response.json()
    parseDataToProducts(data)
    renderAllProducts()
}


function parseDataToProducts(data) {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map["year"], map["songs"], map ["songs2"], map ["label"], map ["format"], map ["colour"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < products.length; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard(i)
    }
}

function productSelected(pos) {
    let productSelected = products[pos]
    window.location = "./detalleProducto.html?name=" + productSelected.albumName
}

getProducts()