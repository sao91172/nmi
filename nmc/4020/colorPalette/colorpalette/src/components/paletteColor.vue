<script setup>
    import {ref} from 'vue'
    const props = defineProps(['color', 'name'])

//     const copyColor = () =>{
//         navigator.clipboard.writeText(props.color)
//         console.log(props.color)
//         showMessage('color copied to clipBoard!')
//     }

//     const showMessage = (message, type = 'success') =>{
//     Toastify({
//         text: message,
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: type === "success" ? "green": "red"
//         },
//         onClick: function(){} // Callback after click
//         }).showToast();

// }

</script>


<template>
    <div class = "color">
        <div class="color-img" :style="{ backgroundColor: color}"></div>
        <div class="color-text"> {{ color }}</div>
        <p class="text-center fs-6 title"> {{ name }} </p>

      </div>
            <!-- <button class="btn btn-outline-primary" @click="copyColor"> Copy!</button> -->
    
      
    
</template>

<style scoped>







</style>