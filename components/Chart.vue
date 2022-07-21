<template>
  <div style="width: 400px; height: 300px" v-if="store.getWeights.length !== 0">
    <canvas id="myChart" ref="chartWeight" height="10" width="10"></canvas>
  </div>
  <div v-else>
    Add data
  </div>
</template>
<script setup>
import Chart from "chart.js/auto"
import {onMounted, ref} from 'vue'
import {useStore} from "../store";
const chartWeight = ref(null);

const store = useStore()
const weights = store.getDateWeights;
const labels = weights.map((w) => w.date.toString())
const data = {
  labels: labels,
  datasets: [{
    label: 'Your weight',
    data: weights.map((w) => w.weight),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};
onMounted(() => {
   new Chart(chartWeight.value, config);
})
</script>