<template>
  <Terminal/>
  <div
    class="w-screen h-screen bg-slate-200 dark:bg-slate-800 flex flex-col overflow-y-auto"
  >
    <Navbar />
    <div class="flex flex-grow">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Terminal from "@/components/Terminal.vue"
import { RouterView } from "vue-router";
</script>