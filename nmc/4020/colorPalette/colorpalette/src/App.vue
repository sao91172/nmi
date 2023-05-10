
<script setup>
  import {ref, onMounted} from 'vue'
  import paletteColor from './components/paletteColor.vue'

 const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
 const colorData = ref([])

 const generateHex = () =>{
  let hexColor = ''
  for (let i = 0; i < 6; i++){  
    const num = Math.floor(Math.random() * digits.length)
    hexColor += digits[num]
  }
  return hexColor
  }

onMounted( () =>{
  window.addEventListener("keypress", e => {
		if(e.code === 'Space' || e.code === 'Enter'){
      fetchData()
    
    }
   
	});

})

const fetchData = async () =>{
  const hexColor= generateHex()
  try{
    const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=analogic`)
    const jsonResponse = await res.json()
    colorData.value = jsonResponse.colors
    console.log(colorData.value)
  }catch(error){
    console.log(error)
  }
}

fetchData()
</script>



<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div class="alert-div">
  <p>Color #FFFFF copied to clipboard!</p>
</div>
  <section class = "section1">
    <h1>Color Palette Generator</h1>
    <div class = "colors">
      <paletteColor 
      v-for="colors in colorData"
      :color = "colors.hex.value"
      :name="colors.name.value"
      class="mx-auto"
      />
    </div>


  </section>

  <section class = "section2">
    <button class = "btn" @click="fetchData()" > Randomize!</button>
    <p>Or press 'SPACEBAR' or 'ENTER' to generate new palettes!</p>
    <h4> Click to copy individual color. Press to 'C' to copy palettes.</h4>
  </section>
</template>

<!-- <script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script> -->

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
body {
  background-color: #E8ECF3;
}

.alert-div {
  text-align: center;
}
.alert-div p {
  font-size: 16px;
  margin-top: 45px;
  background-color: #0C1226;
  color: white;
  display: inline-block;
  border-radius: 50px;
  padding: 12px 25px;

}
.section1 {
  text-align: center;
  margin-top: 75px;
}

.section1 h1 {
  margin: 0px 0px 35px 0px;
  font-size: 500;
}

.section1 .colors {
 width:80%;
 margin: auto;
 display: grid;
 grid-template-columns: repeat(5,1fr);
 grid-column-gap: 45px;

}

.section1 .colors .color {
 background: #ffffff;
 border-radius: 14px;
 padding: 8px 10px 20px 10px;
 box-shadow: 0.4px 0.4px 35px rgba(0, 0, 0, 0.116);
}



.section1 .colors .color .color-img {
 height: 200px;
 background-color: rgb(0, 0, 0);
 margin-bottom: 15px;

}

.section1 .colors .color .color-text {
font-size: 500;
}

.section2 {
  text-align: center;
  margin-top:100px;
}
.section2 .btn {
  font-size: 18px;
  padding: 18px 150px;
  background-color: #7e6cca;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  box-shadow: 0.4px 0.4px 35px rgba(0, 0, 0, 0.116);
  cursor: pointer;
}

.section2 .btn:hover {
  font-size: 18px;
  padding: 18px 150px;
  background-color: #64569f;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  box-shadow: 0.4px 0.4px 35px rgba(0, 0, 0, 0.116);
  
}

.section2 p {
  font-size: 18px;
  margin-top: 30px;
}

.section2 h4 {
  font-size: 16px;
  margin-top: 65px;
  background-color: #ffffff;
  color: #4c545f;
  display: inline-block;
  border-radius: 50px;
  padding: 12px 25px;

}

@media all and (max-width: 800px) {
  body {
    min-height: 265vh;
  }
  .alert-div {
    margin-top: 0px;

  }
  .section1 .colors {
    width: 50%;
    grid-row-gap:40px;
    grid-template-columns: repeat(1,1fr);
  }

  .section2 .btn {
    width: 70%;
    padding: 20px 30px;
  }

  .section2 p {
    width: 80%;
    margin: 20px auto 0px auto;
    font-size: 16px;
  }

  .section2 h4 {
  font-size: 13px;
  margin-top: 25px;
  background-color: #ffffff;
  color: #4c545f;
  display: inline-block;
  border-radius: 50px;
  padding: 12px 25px;

}


}


</style>
