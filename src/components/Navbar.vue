<template>
  <div
    class="w-full py-4 bg-transparent flex items-center justify-center space-x-6"
  >
    <Navitem to="/home">Home</Navitem>
    <Navitem to="/about">About</Navitem>
    <Navitem to="/portfolio">Portfolio</Navitem>
  </div>
</template>

<script setup lang="ts">
import Navitem from "./Navitem.vue";
</script>
