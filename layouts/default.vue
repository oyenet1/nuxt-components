<template>
 <div class="bg-slate-200 w-full space-y-4 p-6 h-screen">
  <div class="max-w-5xl bg-white py-2 rounded-lg px-4 flex mx-auto items-center justify-between">
   <ul class="flex lg:space-x-4 flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-center">
    <li class="py-1 hover:text-primary">
     <NuxtLink to="/">HomePage</NuxtLink>
    </li>
    <li class="py-1 hover:text-primary">
     <NuxtLink to="/emojiapi">Emojiapi</NuxtLink>
    </li>
   </ul>
   <NuxtLink to="http://bowofade.com" class="bg-blue-500 rounded-full px-6 py-2 text-white inline-block" target="_blank"
    rel="noopener noreferrer">
    Contact Me</NuxtLink>
  </div>
  <div class="max-h-[600px] oveflow-y-auto">
   <slot />
  </div>
  <div>
   <p class="px-3 bg-white py-1 rounded-md shadow text-sm border mx-auto max-w-max">Designed and Developed by
    <NuxtLink to="http://bowofade.com" class="text-blue-500 font-medium italic" target="_blank"
     rel="noopener noreferrer">
     Bowofade</NuxtLink>
   </p>
  </div>
 </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>