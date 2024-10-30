class Product {
    constructor(images, albumName, artist, price, discount, genre, style, year, songs, songs2, label, format, colour) {
        this.images = images
        this.albumName = albumName
        this.artist = artist
        this.price = price
        this.discount = discount
        this.genre = genre
        this.style = style
        this.year = year
        this.songs = songs
        this.songs2 = songs2
        this.label = label
        this.format = format
        this.colour = colour
        
    }

    htmlCard(pos) {
        return `
            <div class="product-card">
                    <img src="${this.images}" class="product-image">
                    <h2 class="product-title">${this.albumName}</h2>
                    <p class="product-installments">${this.artist}</p>
                    <p class="product-price">${this.price}</p>
                    <p class="product-discount">${this.discount}</p>
                    <button class="button" role="button">
                <a id="Buttona" href="#" onclick= "productSelected(${pos})"> More Info</a>
            </button>
        `
    }
}

