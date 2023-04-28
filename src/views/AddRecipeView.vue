<script setup>

</script>

<template>
    <div class="new-recipe">
        <h1>Dodaj nowy przepis</h1>
        
        <div class="title">
            <label for="1">Tytuł</label>
            <input id="1" name="title" required/>
        </div>
        <div class="level">
            <label for="2">Poziom trudności</label>
            <select id="2" name="level">
                <option value="b-latwy">Bardzo łatwy</option>
                <option value="latwy">Łatwy</option>
                <option value="sredni">Średni</option>
                <option value="trudny">Trudny</option>
                <option value="b-trudny">Bardzo trudny</option>
            </select>
        </div>
        
        <div class="time">
            <label for="3">Czas trwania</label>
            <select id="3" name="time">
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">60 min</option>
                <option value="75">75 min</option>
                <option value="90">90 min</option>
                <option value="70">70 min</option>
                <option value="105">105 min</option>
                <option value="130">130 min</option>
                <option value="145">145 min</option>
                <option value="160">160 min</option>
                <option value="175">175 min</option>
                <option value="190">190 min</option>
            </select>
        </div>
        <div>
            <label for="desc">Opis</label>
            <textarea name="description" id="desc" cols="30" rows="10"></textarea>
        </div>
        <h2>Składniki:</h2>
        <button>Dodaj</button>
    </div>
</template>

<style lang="scss" scoped>
    .new-recipe{
        
        h1{
            background-color: #ff9393;
            color: white;
        }
        input{
            border-radius: 5px;
            padding: 5px;
        }
        label{
            // font-size: 15px;
        }
        .title{

        }
        .level{

        }
        .time{

        }
    }
</style>