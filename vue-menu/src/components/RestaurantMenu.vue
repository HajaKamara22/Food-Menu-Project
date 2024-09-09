

<script setup>

const props = defineProps(['foodInfo'])

</script>



<template>

<div class="menuContainer">

    <div class="card-info">
        
    <p class="foodName">{{ foodInfo.name }}</p>
    <img class="foodImage" :src="foodInfo.image" alt="">
    <p class="foodDes">{{ foodInfo.description }}</p>
    <p class="foodPrice">${{ foodInfo.price }}</p>

 </div>

</div>



</template>



<style scoped>

.menuContainer{
    border: pink solid;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 30px;
    box-shadow: 5px 10px 10px 5px;
   display: flex;
   justify-content: center;
   align-items: center;
}

.card-info{
    padding: 5px;
}

.foodName{
    display: flex;
}

.foodImage{
    width: 100px;
}



</style>