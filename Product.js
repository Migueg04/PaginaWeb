class Product {
    constructor(images, albumName, artist, price, discount, genre, style, year, songs, songs2, label, format, colour, saved) {
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
        this.saved = saved

    }

    htmlCard(pos) {

        let buttonLabel = "Añadir a Favoritos"
        if(this.saved) {
            buttonLabel = "Quitar de Favoritos"
        }

        


        return `
        <div class="product-card">
                <img src="${this.images}" class="product-image">
                <h2 class="product-title">${this.albumName}</h2>
                <p class="product-installments">${this.artist}</p>
                <p class="product-price">${this.price}</p>
                <p class="product-discount">${this.discount}</p>
                <div class="botones">
                    <button class="button" role="button">
                        <a id="Buttona" href="#" onclick="productSelected(${pos})"> More Info</a>
                    </button>
                   
                    <button class="button" class="fav" onclick="selected(${pos})">${buttonLabel}</button>
                </div>
            </div>
                    
                    
        `
    }

    toMap() {
        return {
            images: this.images,
            albumName: this.albumName,
            artist: this.artist,
            price: this.price,
            discount: this.discount,
            genre: this.genre,
            style: this.style,
            year: this.year,
            songs: this.songs,
            songs2: this.songs2,
            label: this.label,
            format: this.format,
            colour: this.colour,
            saved: this.saved
            
        }
    }
}

