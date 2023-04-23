<script setup>
</script>

<template>
    <div class="search">
    <input type="text" placeholder="Wpisz czego szukasz ...">
    <button>Szukaj</button>
    </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  input[type="text"] {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ff9393;
    margin-right: 10px;
    background-color: transparent;
    color: #999;
    width: 60%;

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
      border-bottom-color: #ff6666;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #ff9393;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #ff6666;
    }
  }
}
</style>
