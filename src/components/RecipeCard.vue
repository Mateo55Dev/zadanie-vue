<script setup>
    import router from '@/router'
import IconFavourite from './icons/IconFavourite.vue';
    const props = defineProps(['recipe']);

    function goToRecipeDetails(){
        router.push(`/recipes/${props.recipe.id}`)
    }

    function toogleLike(recipe){
        if(!recipe.isLike){
            recipe.isLike = 'true';
        }
        else{
            recipe.isLike = 'false';
        }
    }
</script>

<template>
    <div class="recipe" @click="goToRecipeDetails">
        <div class="recipe-image">
            <img :src="recipe.image" :alt="recipe.title">
            <span @click="toogleLike(recipe)" class="like-icon"><IconFavourite/></span>
        </div>
        <div class="recipe-info">
            <h2>{{ recipe.title }}</h2>
            <p>{{ recipe.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.feed {
  display: flex;
  flex-wrap: wrap;
  .recipe {
    border: 5px solid #ff9393;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 10px;
    width: calc(33.33% - 20px);
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-color: #ff9393;
    cursor: pointer;
    
    .recipe-image {
      position: relative;
      img {
        width: 295px;
        height: 200px;
        display: block;
        border-radius: 10px;
        filter: brightness(80%);
        &:hover{
          filter: brightness(100%);
          transition: all 0.4s ease;
        }
      }
    }
      .like-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        & :hover{
            cursor: pointer;
        }
        svg path{
            fill: red;
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

