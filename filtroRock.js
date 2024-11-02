






let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map["year"], map["songs"], map ["songs2"], map ["label"], map ["format"], map ["colour"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products") 
    let resultados = products.filter(product =>
        product.genre === "Rock")
    for(let i = 0; i < resultados.length; i++) {
        let product = resultados[i]
        container.innerHTML += product.htmlCard(i)
    }
}

function productSelected(pos) {
    let productSelected = products[pos]
    window.location = "./detalleProducto.html?name=" + productSelected.albumName
}

parseDataToProducts()
renderAllProducts()