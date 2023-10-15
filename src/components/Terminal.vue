<template>
    <div v-if="showSlide"
        class="animate-slideIn fixed pt-1 px-4 overflow-y-auto top-0 left-0 w-full h-1/3 bg-black bg-opacity-50 transition-transform transform translate-y-0 z-50">
        <div class="flex flex-col space-y-1 text-green-600 w-full">
            <span v-for="cmd in cmdHistory" :key="cmd">
                {{ cmd }}
            </span>
        </div>
        <div class="flex items-center w-full text-green-600">
            <span>{{ prompt }}</span>
            <div class="w-fit caret-transparent inline-block pl-2 py-1 ring-0 outline-none" contenteditable="true"
                spellcheck="false" rows="1" ref="cmdInput"></div>
            <!-- <input type="text" id="cmdInput" v-ref="cmdInput" class="px-2 py-1 bg-transparent ring-0 outline-none max-w-fit w-fit caret-transparent"> -->
            <span class="cursor"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

const showSlide = ref(false);
const cmdInput: Ref<HTMLInputElement | null> = ref(null);

const prompt: string = "root@trebabcock.me $";
const cmdHistory = ref([""]);
let files = new Map<string, string>([
    ["DONT_READ.txt", "I love you."]
]);

onMounted(() => {
    cmdHistory.value = cmdHistory.value.splice(0, 1);
})

let handleKey = (event: KeyboardEvent) => {
    if (event.key === '`') showSlide.value = !showSlide.value
    if (showSlide.value && cmdInput.value) {
        cmdInput.value.focus();
        if (event.key == 'Enter') {
            let text = cmdInput.value.innerText;
            event.preventDefault();
            cmdHistory.value.push(`${prompt} ${text}`)
            cmdInput.value.innerText = "";
            if (text.length) handleCommand(text);
        }
    }
};

let handleCommand = (cmd: string) => {
    cmd = cmd.trim()
    let split: string[] = cmd.split(' ');
    let root = split[0];

    switch (root) { // yes this is totally how shell command parsing works
        case "clear":
            cmdHistory.value = [];
            break;
        case "echo":
            if (split.length > 1) {
                cmdHistory.value.push(split.slice(1, split.length).join(' '))
            }
            cmdHistory.value.push("\t")
            break;
        case "ls":
            for (const f of files.keys()) {
                cmdHistory.value.push(f);
            }
            break;
        case "cat":
            if (split.length > 1) {
                split.slice(1, split.length).forEach(f => {
                    if (files.has(f)) {
                        let text: string | undefined = files.get(f);
                        if (text) cmdHistory.value.push(text);
                    } else {
                        cmdHistory.value.push(`cat: ${f}: No such file or directory`);
                    }
                });
            }
            break;
        default:
            cmdHistory.value.push(`sh: ${root}: command not found`);
            break;
    }
};

window.onkeydown = handleKey;
</script>

<style scoped>
.cursor {
    display: inline-block;
    width: 1ch;
    height: 1.2em;
    background-color: rgb(22 163 74);
    animation: blink 1s steps(1) infinite;
}

@keyframes blink {
    50% {
        background-color: transparent;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>