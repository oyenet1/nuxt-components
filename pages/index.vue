<template>
 <div class="bg-slate-200 py-4 h-screen w-screen">
  <div class="w-full max-w-lg space-y-4  p-4 shadow inset mx-auto bg-white rounded-lg oveflow-y-auto">
   <h1 class="font-medium uppercase">The list of all my components app built using nuxtjs</h1>
   <div class="w-full">
    <ul class="list space-y-2 list-decimal list-inside">
     <li class="rounded shadow space-y-1 bg-slate-50 p-2">
      <span @click="toggleList(1)">Emoji Api</span>
      <p class="text-sm pl-5 text-gray-500" v-show="show == 1">This app consume emoji apis and list the on a page. The
       intermediate part of
       the app is
       that it
       can filter
       emojis base on category visit the link
       <span class="text-blue-600 italic">
        <NuxtLink to="/emojiapi">here</NuxtLink>
       </span>
      </p>

     </li>
    </ul>
   </div>

  </div>
 </div>
</template>

<script setup>
let show = ref(0);

function toggleList(val) {
 show.value = val;
}

</script>
