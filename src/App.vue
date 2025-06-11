
<template>
    <div flex min-h-full flex-col max-w-full>
        <button bg="[#181818]" color="[#181818]" border-none w-4 cursor-pointer @click="printPageVisible = !printPageVisible">Print page</button>
        <PrintPage v-if="printPageVisible" />
        <Quests v-else />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Quests from './Quests.vue';
import PrintPage from './PrintPage.vue';

const printPageVisible = ref(false);
</script>