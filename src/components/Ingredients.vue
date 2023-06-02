<script setup>
</script>

<template>
    <div>
        <input type="text" placeholder="Nazwa składnika">
        <input type="text" placeholder="Ilość">
        <button style="font-size: 24px; font-weight: bold;">+</button>
        <button style="font-size: 24px; font-weight: bold;">-</button>
    </div> 
  </template>

<style lang="scss" scoped>
    div{
        display: flex;
        flex-direction: row;
        display: grid;
        grid-template-columns: 1fr 70px 0.2fr 0.2fr;
        grid-template-rows: 1fr;
    
        button{
            background: #ff9393;
            border: none;
            margin: 0 0 0 5px;
            border-radius: 5px;
        }
        input{
            padding: 5px 2px;
            border-radius: 5px;
        }
    }
    
</style>