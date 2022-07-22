<template>
    <div class="justify-center ">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="addWeight">
          <div class="mb-4">
            <input v-model="weightInput"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="weight"
                   type="number" placeholder="Weight">
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Weight
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useStore} from "../store";
const store = useStore();
const weightInput = ref(0);

function addWeight() {
  store.addWeight(weightInput.value, new Date().getTime());
}
</script>

<style scoped>

</style>