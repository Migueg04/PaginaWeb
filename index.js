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
        let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map["year"], map["songs"], map ["songs2"], map ["label"], map ["format"], map ["colour"], map ["saved"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    container.innerHTML = ""; 
    for(let i = 0; i < products.length; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard(i)
    }
}


function productSelected(pos) {
    let productSelected = products[pos]
    window.location = "./detalleProducto.html?name=" + productSelected.albumName
}

function selected(pos) {
    let product = products[pos]
    if(!product.saved) {
        product.saved = true
        let map = product.toMap()
        let savedProducts = localStorage.getItem("savedProducts")
        let list = []
        if (savedProducts) {
            list = JSON.parse(savedProducts)
        }
        list.push(map)
        let listString = JSON.stringify(list)
        localStorage.setItem("savedProducts", listString)
        renderAllProducts(products)
    } else {
        // TODO: Remove item
    }
}

function isCharacterSaved(AlbumName) {
    let savedProducts = localStorage.getItem("savedProducts")
    if(savedProducts) {
        let list = JSON.parse(savedProducts)
        for(let i = 0; i < list.length; i++){
            let obj = list[i]
            if(obj["AlbumName"] === AlbumName) {
                return true
            }
        }
    }
    return false
}

getProducts()