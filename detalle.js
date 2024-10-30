const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

function getProduct() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let title = map["albumName"]
        console.log(title)
        if(title === nameFromUrl) {
            let product = new Product(map["images"], map["albumName"], map["artist"], map["price"], map["discount"], map["genre"], map["style"], map ["year"], map ["songs"], map ["songs2"], map ["label"], map["format"], map["colour"])
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
}

renderProduct()