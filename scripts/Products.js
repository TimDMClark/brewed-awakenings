import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("product")) {
            const [,getPrimaryKey] = itemClicked.id.split("--")

            let singleProduct = null
            for (const product of products) {
                if (parseInt(getPrimaryKey) === product.id) {
                    singleProduct = product
                }
            }
            const priceString = `$${singleProduct.price.toFixed(2)}`
            window.alert(`                  ${singleProduct.name} costs\n                   ${priceString}`)

        }
    }
)


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

