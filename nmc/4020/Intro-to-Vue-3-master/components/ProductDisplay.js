app.component('product-display', {
    template:
    /*html*/
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img:class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>{{ description }}</p>
        <p> {{price}}</p>
        <p> {{OnSale}}</p>
        <a v-bind:href = "url"> Happy Socks!</a>
        <ul>
            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
          </ul>
        <ul>
            <li v-for = "detail in details">{{detail}}</li>
        </ul>
        <ul>
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class = "color-circle":style = "{backgroundColor:variant.color}"></div>
        </ul>
        <button class = "button" :class = "{disabledButton: !inStock}" :disabled = "!inStock" @click = "addToCart">Add to Cart</button>
        <button style ="font-size: 14px;"class = "button" @click = "removeFromCart">Remove from Cart</button>
      </div>
    </div>
  </div>
</div>
,

    data: function () {
        return {
            cart:0,
            product:'Socks',
            brand: 'Vue Mastery',
            description: 'A warm fuzzy pair of socks.',
            selectedVariant: 0,
            price: '$16.99',
            // inventory: 100,
            onSale: true,
            url: 'https://www.happysocks.com/us/',

            
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green',image: './assets/images/socks_green.jpg', quantity:50},
                {id: 2235,color:'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            styles: {
                color: 'red',
                fontSize: '14px'
            }
        }
        
    },
    methods: {
                addToCart() {
                    this.cart+=1
                }, 
                updateVariant(index) {
                    this.selectedVariant = index
                  },
                  removeFromCart() {
                    this.cart-=1
                }
            },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        OnSale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
    
})