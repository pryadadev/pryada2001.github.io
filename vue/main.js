var app = new Vue({
    el: '#app',
    data: {
        product: 'Носки',
        image: './images/green_socks.jpg',
        inStock: 99,
        onSale: true,
        details: ["80% хлопок", "20% полиэстер", "Подходят для всех"],
        variants: [
            {
                variantId: 1,
                variantColor: "Зелёный",
                variantImage: './images/green_socks.jpg'
            },
            {
                variantId: 2,
                variantColor: "Синий",
                variantImage: './images/blue_socks.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})