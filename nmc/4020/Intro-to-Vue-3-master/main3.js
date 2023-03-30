const app = Vue.createApp({
    data: function () {
        return {
            product:'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_blue.jpg',
            price: '$16.99',
            inventory: 100,
            onSale: true,
            url: 'https://www.happysocks.com/us/'
        }
    }
})

const product = 'Socks'
