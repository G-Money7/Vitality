<template>
  <div>
    <h2>Water Intake Tracker</h2>
    <button @click="addWater(250)">Add 250ml</button>
    <button @click="addWater(500)">Add 500ml</button>
    <p>Total water intake: {{ totalIntake }}ml</p>
    <p>{{ message }}</p>
    <water-intake-logic ref="waterLogic" @update="handleUpdate"></water-intake-logic>
  </div>

      <h1>Staying Hydrated: The Importance of Water Intake</h1>


        <p>
          Water is essential for life and plays a critical role in maintaining our health and well-being. Staying adequately hydrated is vital for various bodily functions, including regulating body temperature, keeping joints lubricated, and transporting nutrients.
        </p>

        <h2>Benefits of Adequate Water Intake</h2>
        <ul>
          <li><strong>Enhances Physical Performance:</strong> Proper hydration contributes to optimal physical performance, especially during intense exercise or high heat.</li>
          <li><strong>Boosts Energy and Brain Function:</strong> Adequate hydration can impact your energy levels and brain function, affecting concentration and mood.</li>
          <li><strong>Promotes Digestive Health:</strong> Water aids digestion and helps prevent constipation.</li>
          <li><strong>Helps in Weight Management:</strong> Drinking water can increase satiety and boost metabolic rate, aiding in weight management.</li>
          <li><strong>Improves Skin Health:</strong> Adequate hydration can improve skin hydration and appearance.</li>
          <li><strong>Detoxification:</strong> Water helps the body flush out waste products and toxins.</li>
        </ul>

        <h2>Hydration Tips</h2>
        <p>
          Drinking enough water throughout the day is crucial. It's recommended to drink at least 8 glasses (about 2 liters) of water daily, but this can vary based on individual needs, activity levels, and environmental factors.
        </p>

        <h2>Tracking Your Water Intake</h2>
        <p>
          Keeping track of your water intake can ensure you're staying hydrated. Use tools like water intake apps or mark your water bottle with time-oriented goals to remind yourself to drink water regularly.
        </p>

        <h2>Conclusion</h2>
        <p>
          Regular water intake is a simple yet effective way to enhance your health and well-being. Make hydration a daily priority to enjoy the numerous benefits it offers.
        </p>



</template>

<script>
import WaterIntakeLogic from './WaterIntakeLogic.vue';

export default {
  components: {
    WaterIntakeLogic
  },
  data() {
    return {
      totalIntake: 0,
      message: '',
    };
  },
  methods: {
    addWater(amount) {
      this.$refs.waterLogic.addIntake(amount);
    },
    handleUpdate(data) {
      this.totalIntake = data.totalIntake;
      this.message = data.message;
    },
  },
};
</script>

<style>

</style>
