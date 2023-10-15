<template>
  <div class="w-full h-full flex flex-col md:justify-center">
    <div
      class="w-full items-center md:justify-center flex flex-col md:flex-row p-4 space-y-8 md:space-x-8 mt-8 md:mt-0 md:mb-10 text-slate-800 dark:text-slate-300">
      <div class="flex flex-col space-y-4 items-center w-72">
        <img src="../assets/me3.jpg" alt="It's a me" class="rounded-full w-48 h-48" />
        <p class="text-3xl">Hi, I'm Tre.</p>
        <p class="text-xl whitespace-nowrap flex items-center">
          I'm a
          <span
            class="px-2 py-1 bg-indigo-600 h-9 dark:bg-indigo-600 text-indigo-50 rounded-lg flex items-center ml-2 my-2">{{
              title }}<span v-if="typing" class="cursor"></span></span>
          <!-- <span class="py-1 px-2 bg-indigo-600 rounded-lg h-9"></span> -->
        </p>
      </div>
      <div class="w-96 text-center leading-relaxed">
        I have experience writing APIs in Go, JavaScript, and Python. For frontend
        development, I have experience with Vue, AngularJS, jQuery, and Svelte.
      </div>
    </div>
    <div class="w-full py-8 flex items-center justify-center">
      <router-link to="/contact" class="bg-indigo-600 hover:bg-indigo-500 rounded-lg py-2 px-4 text-indigo-100">Get In Touch!</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const title = ref("");
const currentTitleIndex = ref(0);
const typing = ref(true);

let titles: string[] = [
  "Frontend Developer",
  "Backend Developer",
  "Go Enthusiest",
  "Tech 𝕏 Apologist",
  "Pseudocode Expert",
  "ANSI Escape Artist",
  "console.log() Debugger",
  "git commit -m 'Humorist'",
  "Full Stack Developer"
];

onMounted(async () => {
  for (let i = 0; i < titles.length; i++) {
    await typeTitle(titles[i]);
    if (i < titles.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await backspaceTitle();
    }
  }
  typing.value = false;
});

const typeTitle = async (txt: string) => {
  typing.value = true;
  for (let char of txt[Symbol.iterator]()) {
    title.value += char;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
};

const backspaceTitle = async () => {
  typing.value = false;
  const chars = [...title.value];
  while (chars.length) {
    chars.pop();
    title.value = chars.join("");
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 1ch;
  height: 1.2em;
  background-color: #fff;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    background-color: transparent;
  }
}
</style>
