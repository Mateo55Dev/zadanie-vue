<script setup>
import Ingredients from '../components/Ingredients.vue';
</script>

<template>
    <h1>Dodaj nowy przepis</h1>
    <div class="new-recipe">
        <form action="">
            <div class="title">
                <label for="1">Tytuł</label><br/>
                 <input id="1" name="title"  maxlength="60"/> <!--required-->
            </div>

            <div class="level">
                <label for="2">Poziom trudności</label><br/>
                <select id="2" name="level">
                    <option value="b-latwy">Bardzo łatwy</option>
                    <option value="latwy">Łatwy</option>
                    <option value="sredni">Średni</option>
                    <option value="trudny">Trudny</option>
                    <option value="b-trudny">Bardzo trudny</option>
                </select>
            </div>
            
            <div class="time">
                <label for="3">Czas trwania</label><br/>
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
                <label for="desc">Opis</label><br/>
                <textarea name="description" id="desc" cols="50" rows="20"></textarea>
            </div>

            <Ingredients/>
            <button>Dodaj</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
        h1{
            background-color: #ff9393;
            color: white;
            margin-bottom: 20px;
        }    
        .new-recipe{
        display: flex;
        align-items: center;
        margin: 30px 0 0 30px;
        
        input{
            border-radius: 5px;
            border: 3px solid #ff9393;
            padding: 8px 5px;
            width: 400px;
            margin: 5px 0;
        }
        select{
            border-radius: 5px;
            border: 3px solid #ff9393;
            padding: 8px 100px;
            width: 400px;
            margin: 5px 0;
        }
        label{
            // font-size: 15px;
            font-weight: bold;
        }
        textarea{
            border-radius: 5px;
            border: 3px solid #ff9393;
            padding: 5px;
            margin: 5px 0;
            outline: none;
            resize: none;
        }
        button{
            padding: 20px;
            background: #ff9393;
            border: none;
            margin: 50px 0 0 320px;
        }
    }
</style>