<template>
  <div style="width: 700px; height: 300px" v-if="store.getWeights.length !== 0">
    <canvas id="myChart" ref="chartWeight" height="10" width="10"></canvas>
  </div>
  <div v-else>
    Add data
  </div>
</template>
<script setup>
import Chart from "chart.js/auto"
import {onMounted, ref, watchEffect, onUnmounted, onBeforeMount} from 'vue'
import {useStore} from "../store";
import {getWeights} from "../composables/useWeights";
const chartWeight = ref(null);
let chart;
const store = useStore()
const weights = ref(store.getDateWeights);
const labels = weights.value.map((w) => w.date.toString())
const data = {
  labels: labels,
  datasets: [{
    label: 'Your weight',
    data: weights.value.map((w) => w.weight),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

const getWeightsAPI = async function () {
  await getWeights();
}
onBeforeMount(() => {
  getWeightsAPI();
  if (chart != null){
    chart.destroy();
  }
  chart = new Chart(chartWeight.value, config);
});

watchEffect(() => {
  if (chart != null){
    chart.destroy()
  }
  console.log('new data so new chart')
  console.log(weights.value)
  console.log(data)
  chart = new Chart(chartWeight.value, config);
});

onUnmounted(() => {
  if (chart != null){
    chart.destroy()
  }
})
</script>

<style scoped>
div {
  justify-content: center;
}
</style>