<template>
    <div bg="[#181818]" m-auto p-8 font-normal flex flex-col items-center>
        <header>
            <div class="header">
                <h1 class="gradient" bg-clip-text color-transparent text-15 tracking--1 font-700 relative top--3>Castlequest</h1>
            </div>
        </header>
        <main mb-8 items-center flex flex-col>
            <div p-4 mb-5 rounded-3xl bg="[#252525]" class="heavy-shadow" flex flex-col items-center>
                <span font-italic text-lg>New quest!</span>
                <div class="active-quest" :class="{'smaller-quest': isActiveQuestTooBig}">❝ {{ activeQuest }} ❞</div>
                <span class="quest-reward">Reward: <b>1 coin</b>.</span>
            </div>
            <button class="btn" mb-3 @click="getRandomSoloQuest">Generate solo quest</button>
            <button class="btn" @click="getRandomGroupQuest">Generate group quest</button>
        </main>
        <footer>
            <div text-xl font-300>
                Return to the quest giver to collect your <span class="gradient" bg-clip-text color-transparent>useless loot</span>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {groupQuests, quests} from './quests'
import { computed } from 'vue';

const activeQuest = ref<string | null>(null)

const isActiveQuestTooBig = computed(() => activeQuest.value && activeQuest.value?.length > 60);

const getRandomSoloQuest = () => {
  const randomNumber = Math.floor(Math.random() * quests.length)
  activeQuest.value = quests[randomNumber]
}

const getRandomGroupQuest = () => {
  const randomNumber = Math.floor(Math.random() * groupQuests.length)
  activeQuest.value = groupQuests[randomNumber]
}

onMounted(() => {
  getRandomSoloQuest();
});
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(90deg, #55cdfc, #f7a8b8);
}

.heavy-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.quest-reward {
  font-size: 1.1rem;
  
}

.active-quest {
  margin: 2rem 0;
  font-size: 2rem;
  max-width: 650px;
}

.active-quest.smaller-quest {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.2rem;
}

.btn {
  background-image: linear-gradient(90deg, #55cdfc, #f7a8b8);
  width: 350px;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  height: 4rem;
  padding: 0 3.5rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
}

.btn:hover {
  box-shadow: #f7a8b8 0 1px 15px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .btn-36 {
      padding: 0 2.6rem;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}
</style>