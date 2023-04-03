const app = Vue.createApp({
    data: function () {
        return {
            cart:1,
            product:'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_blue.jpg',
            price: '$16.99',
            inventory: 100,
            onSale: true,
            url: 'https://www.happysocks.com/us/',

            
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green',image: './assets/images/socks_green.jpg'},
                {id: 2235,color:'blue', image: './assets/images/socks_blue.jpg'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
        
    },
    methods: {
                addToCart() {
                    this.cart+=1
                }, 
                updateImage(variantImage) {
                    this.image = variantImage
                  },
                  removeFromCart() {
                    this.cart-=1
                }
            }

})
const product = 'Socks'