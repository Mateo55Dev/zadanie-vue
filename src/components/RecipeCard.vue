<script setup>
  import router from '@/router'
  import IconFavouriteEmpty from './icons/IconFavouriteEmpty.vue';
  import IconFavouriteFilled from './icons/IconFavouriteFilled.vue';
  const props = defineProps(['recipe']);

  function goToRecipeDetails(){
    router.push(`/recipes/${props.recipe.id}`)
  }

  function trimText(text, length) {
  if (text.length > length) {
    const trimmedText = text.slice(0, length);
    const lastSpace = trimmedText.lastIndexOf(" ");
    return trimmedText.slice(0, lastSpace) + "...";
  } 
  else {
    return text;
  }
}
</script>

<template>
    <div class="recipe" @click="goToRecipeDetails">
        <div class="recipe-image">
            <img :src="recipe.image" :alt="recipe.title">
            <span v-if="!recipe.isLiked" @click.stop class="like-icon"><IconFavouriteEmpty/></span>
            <span v-else @click.stop class="like-icon"><IconFavouriteFilled/></span>
        </div>
        <div class="recipe-info">
            <h2>{{ recipe.title }}</h2>
            <p>{{ trimText(recipe.description, 160) }}</p>
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

