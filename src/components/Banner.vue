<script setup>
    import {ref} from "vue"
    import IconLogo from "./icons/IconLogo.vue";

    const users = ref([
        {
            name: 'Mateusz Rożenek',
            image: 'https://picsum.photos/200'
        }
    ]);
</script>

<template>
    <div class="banner">
        <IconLogo/>
        <div class="user">
            <div v-for="user in users">
                <div class="user-img-name">
                    <img :src="user.image" width="50">
                    <span>{{ user.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: black;
  border-radius: 8px;

  .user {
    display: flex;
    align-items: center;

    .user-img-name {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        border-radius: 50%;
        margin-right: 10px;
      }

      span {
        color: white;
        font-size: 18px;
      }
    }
  }
}
</style>