<script setup>
import router from '@/router';
import { ref } from 'vue';



let newName = ''
let newImage = ''
let newDescription = ''
let newPrice = ''

function newFood() {
    let foodInformation = {
        "name" : newName,
        "description" : newDescription,
        "price" : newPrice,
        "image" : newImage

    }
    const params = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(foodInformation),
    };
    fetch("http://localhost:3000/additem", params)
    .then(response => response.json())
    .then(() => {
        router.push('/') //redirect new item to the home page
    })
}


// function addMenuItem() {
//   fetch('http://localhost:3000/menu', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newItem)
//   })
//   .then(response => response.json())
//   .then(data => {
//     menuItems.push(data) //adding new items to the menu
//     newItem.name = '' //atomically making the form field
//     newItem.description = ''
//     newItem.price = ''
//     newItem.image = ''
//   })
// }


</script>


<template>

<h2 class="newTitle">New Item</h2>


<div>
    <body>
<div class="addOns">
    <p>Name:</p>
    <input type="text" v-model="newName">
    <p>Description</p>
    <input type="text" v-model="newDescription">
    <p>Price</p>
    <input type="text" v-model="newPrice">
    <p>Image Link</p>
    <input type="text" v-model="newImage">
    
</div>

<div class="submit">
    <button @click="newFood()">Submit!</button> 
   
</div>
    </body>


   

</div>


</template>


<style scoped>

.newTitle{
  font-weight: bold;
  text-align: center;
  
}

.addOns{
    text-align: center;
}

.submit{
    text-align: center;
    margin: 20px
}

</style>