let products = []

async function getProducts() {
    let response = await fetch("https://raw.githubusercontent.com/Migueg04/PaginaWeb/refs/heads/main/data.json")
    let data = await response.json()
    parseDataToProducts(data)
}

function parseDataToProducts(data) {
    for (let i = 0; i < data.length; i++) {
        let map = data[i]
        let productSaved = isProductSaved(map["albumName"])
        let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map["year"], map["songs"], map["songs2"], map["label"], map["format"], map["colour"], productSaved)
        products.push(product)
    }
    renderAllProducts(products)
}

function renderAllProducts() {
    let container = document.getElementById("products")
    container.innerHTML = ""; 
    products = products.filter(product =>
        product.genre === "Rock")
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
    let loggedUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))) //Load logged user in json format

    let product = products[pos]
    let savedProducts = loggedUser.favorites
    let list = savedProducts ? savedProducts : []

    if(!product.saved) {
        product.saved = true
        let map = product.toMap()
        list.push(map)
    } else {
        product.saved = false
        list = list.filter(p => p.albumName !== product.albumName)
    }
    loggedUser.favorites = list


    localStorage.setItem(loggedUser.user, JSON.stringify(loggedUser))
    renderAllProducts(products)
}

function isProductSaved(albumName) {
    let loggedUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))) //Load logged user in json format
    let savedProducts = loggedUser.favorites
    if(savedProducts) {
        let list = savedProducts
        for(let i = 0; i < list.length; i++){
            let obj = list[i]
            if(obj["albumName"] === albumName) {
                return true
            }
        }
    }
    return false
}



getProducts()