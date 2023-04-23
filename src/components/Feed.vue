<script setup>
import { ref } from 'vue';
import RecipeCard from './RecipeCard.vue';
import IconFavourite from './icons/IconFavourite.vue';

const recipes = ref([
    {
        id: '11111',
        image: 'https://picsum.photos/280/200?random=382462965',
        isLiked: 'true',
        title: 'Ciasto biały lion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '22222',
        image: 'https://picsum.photos/280/200?random=267320845',
        isLiked: 'false',
        title: ' Sernik nowojorski',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '33333',
        image: 'https://picsum.photos/280/200?random=940641471',
        isLiked: 'false',
        title: 'Tarta banoffee',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '44444',
        image: 'https://picsum.photos/280/200?random=619331839',
        isLiked: 'true',
        title: 'Ciasto runo leśne',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '55555',
        image: 'https://picsum.photos/280/200?random=76457442',
        isLiked: 'true',
        title: 'Truskawkowe pole',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '66666',
        image: 'https://picsum.photos/280/200?random=16288195',
        isLiked: 'false',
        title: ' Ciasto góra lodowa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]);
</script>

<template>
    <div class="feed">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
  </div>
  (z str. https://fajnegotowanie.pl/-do usunięcia)
</template>

<style lang="scss" scoped>
</style>

