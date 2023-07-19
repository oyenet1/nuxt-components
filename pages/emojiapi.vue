<template>
 <div class="bg-slate-200 w-full space-y-4 p-6 h-screen">
  <div class="flex bg-white p-4 rounded-lg shadow justify-between max-w-5xl mx-auto items-center">
   <h1 class="text-center text-xl uppercase font-medium">List of emojis</h1>{{ search }}
   <div class="flex items-center space-x-2 text-sm">
    <input v-model="search" type="text" class="bg-slate-50 border px-3 py-2 rounded-md" placeholder="categories">
    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg ">Search &#128523;</button>
   </div>
  </div>
  <div
   class="w-full grid gap-8 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-white p-4 rounded-lg shadow max-w-5xl mx-auto">
   <div class="rounded shadow p-4 space-y-4  flex flex-col text-center" v-for="emoji in emojis">
    <span v-for="em in emoji.htmlCode" v-html="em" class="text-7xl"></span>
    <p class="capitalize">{{ emoji.name }}</p>
   </div>
  </div>
 </div>
</template>

<script setup>

let search = ref('')

const { data: emojis } = await useFetch('https://emojihub.yurace.pro/api/all')

</script>
