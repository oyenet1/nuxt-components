<template>
 <div class="space-y-4">
  <div
   class="flex flex-col gap-4 md:flex-row bg-white p-4 rounded-lg shadow justify-between max-w-5xl mx-auto items-center">
   <h1 class="text-center text-xl uppercase font-medium">List of emojis</h1>
   <div class="flex items-center space-x-2 text-sm">
    <input @keyup="searchEmoji" v-model="search" type="text" class="border px-3 py-2 rounded-md"
     placeholder="categories">
    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Search &#128523;</button>
   </div>
  </div>
  <div
   class="w-full overflow-y-auto max-h-[450px] grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-white p-4 rounded-lg shadow max-w-5xl mx-auto">
   <div class="rounded shadow p-4 space-y-4  flex flex-col text-center" v-for="emoji in results">
    <span v-for="(em, ke) in emoji.htmlCode" v-html="em" :key="ke" v-show="ke == '0'" class="text-7xl"></span>
    <p class="capitalize">{{ emoji.name }}</p>
   </div>
  </div>
 </div>
</template>

<script setup>

let search = ref('')
let results = computed(() => {
 return emojis.value.filter((res) => { return res.name.includes(search.value) });
});

const { data: emojis, refresh } = await useFetch('https://emojihub.yurace.pro/api/all');



</script>
