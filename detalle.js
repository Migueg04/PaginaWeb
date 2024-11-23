const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

let currentUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")))

const addToFavButton = document.getElementById("addToFavouritesButton") 

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

function getProduct() {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let title = map["albumName"]
        console.log(title)
        if(title === nameFromUrl) {
            let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map ["year"], map ["songs"], map ["songs2"], map ["label"], map["format"], map["colour"], map ["saved"])
            return product
        }
    }
}



function renderProduct() {
    let product = getProduct()
    
    let titleH1 = document.getElementById("albumName")
    titleH1.innerHTML = product.albumName

    let descriptionP = document.getElementById("artist")
    descriptionP.innerHTML = product.artist

    let priceH3 = document.getElementById("price")
    priceH3.innerHTML = product.price

    let mainImg = document.getElementById("images")
    mainImg.src = product.images


    let genreinfo = document.getElementById("genre")
    genreinfo.innerHTML = product.genre

    let yearinfo = document.getElementById("year")
    yearinfo.innerHTML = product.year

    let styleinfo = document.getElementById("style")
    styleinfo.innerHTML = product.style

    let colourinfo = document.getElementById("colour")
    colourinfo.innerHTML = product.colour

    let formatinfo = document.getElementById("format")
    formatinfo.innerHTML = product.format

    let labelinfo = document.getElementById("label")
    labelinfo.innerHTML = product.label

    const elementos = product.songs;
    const songs = document.getElementById("songs")

    for(let i = 0; i < elementos.length; i++){
        const parrafo = document.createElement("p");
        parrafo.textContent = elementos[i];
        songs.appendChild(parrafo);
    }

    const elementos2 = product.songs2;
    const songs2 = document.getElementById("songs2")

    for(let i = 0; i < elementos.length; i++){
        const parrafo = document.createElement("p");
        parrafo.textContent = elementos2[i];
        songs2.appendChild(parrafo);
    }

    //console.log(isProductSaved(titleH1.textContent))
    
    addToFavButton.textContent = isProductSaved(titleH1.textContent) ? "Remove from favorites" : "Add to favorites"
}

renderProduct()



addToFavButton.addEventListener("click", ()=>{
    let product = getProduct()
    if(product.saved === true){
        currentUser.favorites = currentUser.favorites.filter(p => p.albumName !== product.albumName )
        product.saved = false
    }else{
        product.saved = true 
        let map = product.toMap()
        currentUser.favorites.push(map)
    }

    console.log(JSON.stringify(currentUser))
    localStorage.setItem(currentUser.user, JSON.stringify(currentUser))
    addToFavButton.textContent = product.saved? "Remove from favorites" : "Add to favorites"
    

})