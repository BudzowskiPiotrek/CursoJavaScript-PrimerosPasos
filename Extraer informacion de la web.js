let imputHtml = `<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <p>Web de viaje</p>
        <div class="product">
        <div class="imagen">
            <img src="beach.jpg"/>
        </div>
        <div class="content">
            <p class="title">vacaciones en la playa</p>
            <p class="desc">para dos personas con pension completa</p>
            <p class="price">165&euro; por noche/peronsa</p>
        </div>
        </div>
    </body>
</html>`;

class Extractor {
    #value;

    constructor(html, pattern) {
        this.#value = this.#extract(html, pattern);
    }

    get value() {
        return this.#value;
    }

    #extract(html, pattern) {
        let capture = pattern.exec(html);
        return capture[1];
    }
}

class Product {
    #title;
    #image;

    constructor(title, image) {
        this.#title = title;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    get image() {
        return this.#image;
    }
}

let image = new Extractor(imputHtml, new RegExp(/<img src="(?<image>.*)"\/>/));

console.log(image)