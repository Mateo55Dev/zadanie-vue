<script setup>
import Banner from '../components/Banner.vue'
import Navgation from '../components/Navgation.vue';
import SearchBar from '../components/SearchBar.vue';
import Feed from '../components/Feed.vue';
</script>

<template>
    <div class="main-layout">
        <header>
            <Banner/>
        </header>

        <aside class="aside">
            <Navgation/>
        </aside>

        <main>
            <div class="container">
                <!-- <SearchBar/> -->
                <slot></slot>
                <!-- <Feed/> -->
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .main-layout
    {
        min-width: 1200px;
        border-radius: 50px;
        .aside{
            width: 20%;
            padding: 5px 5px 5px 0;
            float: left;
        }

        .container{
            width: 80%;
            float: left;
            padding: 10px;
        }
    }
</style>