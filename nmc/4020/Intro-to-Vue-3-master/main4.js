const app = Vue.createApp({
    data: function () {
        return {
            product:'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_blue.jpg',
            price: '$16.99',
            inventory: 100,
            onSale: true,
            url: 'https://www.happysocks.com/us/',

            
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green'},
                {id: 2235,color:'blue'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    }
})
const product = 'Socks'