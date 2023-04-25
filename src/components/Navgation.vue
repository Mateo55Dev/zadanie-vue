<script setup>

</script>

<template>
    <nav>
        <RouterLink to="/"><h1>Wszystkie przepisy</h1></RouterLink>
        <RouterLink to="/favourites"><h1>Ulubione</h1></RouterLink>
        <RouterLink to="/addRecipe"><h1>Dodaj przepis</h1></RouterLink>
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