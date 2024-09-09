<script setup>
import RestaurantMenu from '@/components/RestaurantMenu.vue'
import {reactive} from 'vue'

let menuItems = reactive([])


  
  fetch('http://localhost:3000/menu/')
  .then(response => {
  return response.json()
  })
  .then(menu => {
    menuItems.push(...menu)
  })


</script>

<template>



  <div >


  
   
  
  <div  class="container">
     <RestaurantMenu v-for="post in menuItems" :foodInfo="post"></RestaurantMenu>
  </div>

</div>



<div class="newItem">
 <RouterLink to="/add" >Add Item</RouterLink>
</div>



</template>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 90px;
 
}

.title{
  font-weight: bold;
  text-align: center;
  
}


.newItem{

font-size: 25px;
width: 100%;
text-decoration: underline;
margin-bottom: 50px;
text-align: center;
margin-top: 20px;
}

</style>
