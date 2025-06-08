<template>
    <!-- This page is purely for myself so I can have a single place to put all my 
        quests, and an easy way to format all of them for printing purposes. We all 
        know how Word never wants to work properly. -->
    <div flex flex-wrap gap-3>
        <div v-for="quest in quests" 
            printquest
        >
        	<span my-auto text-3xl>{{quest}}</span>
            <span mt-auto ml-auto>castle.questifyer.com</span>
        </div>
        <div v-for="quest in groupQuests" 
            printquest
        >
            <div my-auto flex flex-col>
                <span text-2xl font-bold mb-4>Group quest!</span>
                <span text-3xl>{{quest}}</span>
            </div>
            <span mt-auto ml-auto>castle.questifyer.com</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { quests, groupQuests } from './quests';
</script>