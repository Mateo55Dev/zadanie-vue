<script setup>
import { ref } from 'vue';
import RecipeCard from './RecipeCard.vue';

const recipes = ref([
    {
        id: '11111',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/4984/desktop/ciasto-bialy-lion.jpg.webp',
        isLiked: false,
        title: 'Ciasto biały lion',
        description: 'Ciasto biały lion jest świetną opcją dla wszystkich, którzy kochają popularny słodki batonik, gdyż ten wypiek pozwala na stworzenie we własnej kuchni jego odpowiednik.',
        difficulty: '',
        time: '',
    },
    {
        id: '22222',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/564/desktop/sernik-nowojorski.jpg.webp',
        isLiked: true,
        title: ' Sernik nowojorski',
        description: 'Sernik nowojorki to idealne ciasto dla miłośników słodkich wypieków. Jest pyszny i kremowy, a w dodatku prezentuje się naprawdę świetnie, a przepis jest naprawdę łatwy.',
        difficulty: 'Bardzo łatwy',
        time: '130 min',
    },
    {
        id: '33333',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/5903/desktop/tarta-banoffee.jpg.webp',
        isLiked: false,
        title: 'Tarta banoffee',
        description: 'Tarta banoffee to pomysł na pyszny słodki dodatek w ciągu dnia. Wypiek jest prosty w przygotowaniu i niezwykle aromatyczny. Spróbuj koniecznie!',
        difficulty: '',
        time: '',
    },
    {
        id: '44444',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/553/desktop/ciasto-runo-lesne.jpg.webp',
        isLiked: true,
        title: 'Ciasto runo leśne',
        description: 'Koniecznie wypróbuj naszego przepisu na przepyszne ciasto runo leśne. Składa się ono ze szpinaka, dlatego warto włączyć je do swojej diety. Zachwyca swoim nieziemskim smakiem.',
        difficulty: '',
        time: '',
    },
    {
        id: '66666',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/552/desktop/ciasto-gora-lodowa_LZHT8yH.jpg.webp',
        isLiked: false,
        title: ' Ciasto góra lodowa',
        description: 'Ciasto góra lodowa, czyli szybki, słodki deser niewymagający pieczenia. Ciasto na herbatnikach, z biszkoptami i waniliową masą budyniową.',
        difficulty: 'Łatwy',
        time: '45 min',
    },
    {
        id: '55555',
        image: 'https://static.fajnegotowanie.pl/media/uploads/media_image/auto/recipe-content/5881/desktop/truskawkowe-pole.jpg.webp',
        isLiked: true,
        title: 'Truskawkowe pole',
        description: 'Wypróbuj sprawdzony przepis na ciasto truskawkowe pole. Oryginalny tort z zielonym biszkoptem z dodatkiem szpinaku i świeżymi truskawkami pięknie się prezentuje i wyśmienicie smakuje.',
        difficulty: 'Trudny',
        time: '105 min',
    },
]);
</script>

<template>
    <div class="feed">
        <div class="recipe" v-for="recipe in recipes">
            <RecipeCard v-if="recipe.isLiked" :key="recipe.id" :recipe="recipe"/>
        </div>
        
    </div>
    <p>(z str. https://fajnegotowanie.pl/-do usunięcia)</p>
</template>

<style lang="scss" scoped>
.feed {
    display: flex;
  .recipe {
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 10px;
    width: calc(33.33% - 20px);

    background-color: #ff9393;
    cursor: pointer;
    
    .recipe-image {
      position: relative;
      img {
        width: 295px;
        height: 200px;
        display: block;
        border-radius: 10px;
        filter: brightness(70%);
        &:hover{
          filter: brightness(100%);
          scale: 1.01;
          transition: all 0.4s ease-in-out;
        }
      }
    }
      .like-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        & :hover{
            cursor: copy;
            scale: 1.04;
            transition: all 0.4s ease-in-out;
        }
      }
    }
    .recipe-info {
      padding: 10px;
      h2 {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: rgb(210, 210, 210);
      }
      p {
        margin: 0;
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>

