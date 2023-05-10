const { createApp } = Vue;

createApp({
  data() {
    return {
      colorData: [],
      message:'',
      showSuccessAlert: false,
    };
  },
  methods: {
    generateHex() {
      this.colorData = []
    //   this.showSuccessAlert=false
      const usedColors = new Set() // Keep track of used colors
      while (this.colors.length < 6) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let hexColor = '#' + randomColor
        if (!usedColors.has(hexColor)) { // Check if color has already been added
          this.colors.push(hexColor)
          usedColors.add(hexColor)
        }
      }
    },    
    handleSpacebar(e) {
      if (e.code === 'Space' || e.code === 'Enter') {
        // Your code to execute when the spacebar is pressed
        this.fetchData()
      }
    },
    handleCopy(color){
      if (navigator.clipboard) {
        navigator.clipboard.writeText(color);
        this.message='copied'+color
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
          this.message='copied'+color
          this.showSuccessAlert=true
        } catch (err) {
          console.error('Could not copy text: ', err);
        }
        document.body.removeChild(textarea);
      }
      
    },
    handleClick(event) {
      // Check if the clicked element is a link
      if (event.target.tagName !== 'A' && !event.target.closest('.colored')) {
        // Your code to execute when a non-link element is clicked goes here
       this.showSuccessAlert=false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClick);
    this.calculate();
    document.addEventListener('keydown', this.handleSpacebar);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('keydown', this.handleSpacebar);
  },

}).mount("#app");


// const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
// const colorData = ref([])

// const generateHex = () =>{
//  let hexColor = ''
//  for (let i = 0; i < 6; i++){  
//    const num = Math.floor(Math.random() * digits.length)
//    hexColor += digits[num]
//  }
//  return hexColor
//  }

// onMounted( () =>{
//  window.addEventListener("keypress", e => {
//        if(e.code === 'Space' || e.code === 'Enter'){
//      fetchData()
   
//    }
  
//    });

// })

// const fetchData = async () =>{
//  const hexColor= generateHex()
//  try{
//    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=analogic`)
//    const jsonResponse = await res.json()
//    colorData.value = jsonResponse.colors
//    console.log(colorData.value)
//  }catch(error){
//    console.log(error)
//  }
// }

// fetchData()