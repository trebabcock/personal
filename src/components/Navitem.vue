<template>
  <div
    @click="navigate"
    class="rounded-lg hover:bg-slate-300 hover:dark:bg-slate-700 hover:shadow-sm px-2 py-1 cursor-pointer select-none"
    :class="selected ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500'"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
const router = useRouter();
const route = useRoute();
const props = defineProps<{
  to: string;
}>();

let navigate = () => {
  router.push({ path: props.to });
};

const selected = computed(() => {
  return props.to == route.path;
});
</script>
