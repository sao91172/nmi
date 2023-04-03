app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },

  },
    template:
    /*html*/
    ` <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        
        <!-- solution -->
        <product-details :details="details"></product-details>
        <!-- solution -->
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>`
  

,

    data () {
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
           
        },
        shipping() {
          if (this.premium) {
            return 'Free'
          }
            return 2.99
          }

    }
    
})