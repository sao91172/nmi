const { createApp } = Vue;
let button = document.querySelector('#generate');
createApp({
  data() {
    return {
      colors: [],
      message:'',
      showSuccessAlert: false,
    };
  },
  methods: {
    generateHex() {
      this.colors = []
      this.showSuccessAlert=false
    let hexColor = '';
      const usedColors = new Set() // Keep track of used colors
      while (this.colors.length < 5) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        hexColor = '#' + randomColor
        if (!usedColors.has(hexColor)) { // Check if color has already been added
          this.colors.push(hexColor)
          usedColors.add(hexColor)
        }
      }
    },
    handleSpaceAndEnter(e) {
      if (e.code === 'Space' || e.code === 'Enter') {
        // Your code to execute when the spacebar is pressed
        this.generateHex()
      }
    },
    handleCopy(color){
      if (navigator.clipboard) {
        navigator.clipboard.writeText(color);
        this.message='Color '+ color + ' copied to clipboard!'
        this.showSuccessAlert=true
      } else {
        var textarea = document.createElement('textarea');
        textarea.value = color;
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try {
          document.execCommand('copy');
          this.message='Color '+ color + ' copied to clipboard!'
          this.showSuccessAlert=true
        } catch (err) {
          console.error('Could not copy text: ', err);
        }
        document.body.removeChild(textarea);
      }
      
    },
    handleClick(e) {
      // Check if the clicked element is a link
      if (e.target.tagName !== 'A' && !e.target.closest('.colored')) {
        // Your code to execute when a non-link element is clicked goes here
       this.showSuccessAlert=false
      }
    }
      },
       
  mount() {
    document.addEventListener('click', this.handleClick);
    this.generateHex();
    document.addEventListener("keypress", this.handleSpaceAndEnter);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener("keypress", this.handleSpaceAndEnter);
  },

  //  fetchData () {
  //   const hexColor= generateHex()
  //   try{
  //     const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=analogic`)
  //     const jsonResponse = await res.json()
  //     colorData.value = jsonResponse.colors
  //     console.log(colorData.value)
  //   }catch(error){
  //     console.log(error)
  //   }
  //}
  
  

}).mount("#app");