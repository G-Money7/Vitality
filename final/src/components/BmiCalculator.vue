<template>
  <div class="bmi-calculator">
    <h2>BMI Calculator</h2>
    <div class="unit-selector">
      <label for="unit">Unit System:</label>
      <select v-model="unit" @change="resetForm">
        <option value="metric">Metric</option>
        <option value="standard">Standard</option>
      </select>
    </div>
    <div class="input-group" v-if="unit === 'metric'">
      <label for="height">Height (cm):</label>
      <input type="number" v-model="height" />
      <label for="weight">Weight (kg):</label>
      <input type="number" v-model="weight" />
    </div>
    <div class="input-group" v-else>
      <label for="height">Height (in):</label>
      <input type="number" v-model="height" />
      <label for="weight">Weight (lb):</label>
      <input type="number" v-model="weight" />
    </div>
    <button @click="calculateBMI" class="calculate-button">Calculate BMI</button>
    <p v-if="bmiResult" class="result">Your BMI: {{ bmiResult.toFixed(2) }}</p>
    <p v-if="bmiStatus" class="status">{{ bmiStatus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unit: 'metric',
      height: null,
      weight: null,
      bmiResult: null,
      bmiStatus: null,
    };
  },
  methods: {
    resetForm() {
      this.height = null;
      this.weight = null;
      this.bmiResult = null;
      this.bmiStatus = null;
    },
    calculateBMI() {
      if (this.height && this.weight) {
        if (this.unit === 'metric') {
          const heightInMeters = this.height / 100;
          const bmi = this.weight / (heightInMeters * heightInMeters);
          this.displayBMIResult(bmi);
        } else {
          const bmi = (this.weight / (this.height * this.height)) * 703;
          this.displayBMIResult(bmi);
        }
      } else {
        alert('Please enter valid height and weight.');
      }
    },
    displayBMIResult(bmi) {
      this.bmiResult = bmi;
      if (bmi < 18.5) {
        this.bmiStatus = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        this.bmiStatus = 'Normal Weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        this.bmiStatus = 'Overweight';
      } else {
        this.bmiStatus = 'Obese';
      }
    },
  },
};
</script>

<style scoped>

</style>
