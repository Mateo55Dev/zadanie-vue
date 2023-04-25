<script setup>
import { ref } from 'vue';
import RecipeCard from './RecipeCard.vue';

const recipes = ref([
    {
        id: '11111',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/4984/desktop/ciasto-bialy-lion.jpg.webp',
        isLiked: true,
        title: 'Ciasto biały lion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '22222',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/564/desktop/sernik-nowojorski.jpg.webp',
        isLiked: false,
        title: ' Sernik nowojorski',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '33333',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/5903/desktop/tarta-banoffee.jpg.webp',
        isLiked: false,
        title: 'Tarta banoffee',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '44444',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/553/desktop/ciasto-runo-lesne.jpg.webp',
        isLiked: true,
        title: 'Ciasto runo leśne',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '66666',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/552/desktop/ciasto-gora-lodowa_LZHT8yH.jpg.webp',
        isLiked: false,
        title: ' Ciasto góra lodowa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '55555',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/5881/desktop/truskawkowe-pole.jpg.webp',
        isLiked: true,
        title: 'Truskawkowe pole',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]);
</script>

<template>
    <div class="feed">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
  </div>
  <p>(z str. https://fajnegotowanie.pl/-do usunięcia)</p>
</template>

<style lang="scss" scoped>
</style>

