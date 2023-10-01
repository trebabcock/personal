<template>
  <div
    class="w-full h-full items-center md:justify-center flex flex-col md:flex-row p-4 space-y-8 md:space-x-8 mt-8 md:mt-0 md:mb-10 text-slate-800 dark:text-slate-300"
  >
    <div class="flex flex-col space-y-4 items-center w-72">
      <img
        src="../assets/me.jpg"
        alt="It's a me"
        class="rounded-full w-48 h-48"
      />
      <p class="text-3xl">Hi, I'm Tre.</p>
      <p class="text-xl whitespace-nowrap flex items-center">
        I'm a
        <span
          class="px-2 py-1 bg-indigo-600 h-9 dark:bg-indigo-600 text-indigo-50 rounded-lg flex items-center ml-2 my-2"
          >{{ title }}<span v-if="typing" class="cursor"></span
        ></span>
        <!-- <span class="py-1 px-2 bg-indigo-600 rounded-lg h-9"></span> -->
      </p>
    </div>
    <div class="w-96 text-center leading-relaxed">
      I have experience writing APIs in Go, JavaScript, and Python. For frontend
      development, I have experience with Vue, AngularJS, jQuery, and Svelte.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const title = ref("");
const currentTitleIndex = ref(0);
const typing = ref(true);
let titles = [
  "Frontend Developer",
  "Backend Developer",
  "Go Enthusiest",
  "Tech 𝕏 Apologist",
  "Full Stack Developer",
];

onMounted(async () => {
  for (let i = 0; i < titles.length; i++) {
    await typeTitle(titles[i]);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (i < titles.length - 1) await backspaceTitle();
  }
  typing.value = false;
});

const typeTitle = async (txt) => {
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
  width: 1ch; /* ch is a unit representing the width of the character "0" */
  height: 1.2em; /* Adjust the height to match your text */
  background-color: #fff; /* Color of the cursor */
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    background-color: transparent;
  }
}
</style>
