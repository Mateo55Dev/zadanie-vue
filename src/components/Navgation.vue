<script setup>
import HomeView from '../views/HomeView.vue';
import Favourites from '../views/FavouritesView.vue'
import AddRecipe from '../views/addRecipeView.vue'
</script>

<template>
    <nav>
        <RouterLink to="/"><HomeView/></RouterLink>
        <RouterLink to="/favourites"><Favourites/></RouterLink>
        <RouterLink to="/addRecipe"><AddRecipe/></RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
    nav{
        background-color: gray;
        border-radius: 10px;
        margin: 10px 5px 10px 0px;
        padding: 8px;
        text-align: center;
        font-size: 20px;
        min-height: 500px;
        h1{
            background-color: #ff9393;
            margin: 5px 0px 5px 0px;
            border-radius: 8px;
        }
    }
</style>