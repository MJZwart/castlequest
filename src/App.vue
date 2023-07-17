<template>
  <div class="content">
    <header>
      <div class="header">
        <h1 class="gradient">Castlequest</h1>
      </div>
    </header>
    <main>
      <div class="active-quest">{{ activeQuest }}</div>
      <button class="random-quest-btn btn" @click="getRandomQuest">Generate new quest</button>
    </main>
    <footer>
      <div class="footer">
        Took a picture of your quest? Share them with the hashtag
        <span class="gradient">#castlequest</span> on social media!
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { quests } from './quests'

const activeQuest = ref<string | null>(null)

const getRandomQuest = () => {
  const randomNumber = Math.floor(Math.random() * quests.length)
  activeQuest.value = quests[randomNumber]
}

onMounted(() => {
  getRandomQuest()
})
</script>
