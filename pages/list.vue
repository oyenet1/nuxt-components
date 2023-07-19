<template>
 <div class="bg-slate-200 py-4 space-y-4 h-screen w-screen">
  <div class="bg-white space-y-4 shadow p-4 max-w-5xl rounded-lg  mx-auto">
   <div class="space-x-2">
    <input type="text" placeholder="type here..." v-model="val"
     class="rounded bg-slate-50 border px-2 text-sm py-1 text-slate-500">
    <button @click="addVal" class="px-6 py-1 text-sm text-white bg-green-600 rounded">Save</button><br>
    <span class="text-sm text-red-500" v-show="er.length">{{ er }}</span>
   </div>
   <div class="w-full text-gray-500">
    <ul class="list-decimal list-inside" v-if="dat.length">
     <li class="capitalize" v-for="d in dat" :key="d">
      {{ d }}
     </li>
    </ul>
    <span v-else>No data yet, kindly add one</span>
   </div>
  </div>
 </div>
</template>

<script setup>

let val = ref('');
let er = ref('');

let dat = ref([]);

function addVal() {
 if (val.value.length) {
  er.value = '';
  dat.value.push(val.value);
  val.value = '';
 } else {
  er.value = "field cannot be empty";
 }
}

</script>