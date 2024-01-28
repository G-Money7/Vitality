<template>
  <div class="calorie-logger">
    <h2>Calorie Logger</h2>
    <ul class="entry-list">
      <calorie-item
          v-for="(entry, index) in entries"
          :key="index"
          :entry="entry"
          :index="index"
          @edit="editCalorie"
          @delete="deleteCalorie"
      ></calorie-item>
    </ul>
    <p class="total-calories">Total Calories: {{ totalCalories }}</p>
    <button @click="addCalorie" class="add-button">Add Food</button>
  </div>


      <h1>Understanding Calories and the Importance of a Balanced Diet</h1>


        <p>
          Calories are a measure of energy, and they are an essential part of our diet. They fuel everything we do, from sleeping to running a marathon. However, the key to a healthy lifestyle is not just counting calories but understanding the importance of a balanced diet.
        </p>



        <h2>What is a Balanced Diet?</h2>
        <p>
          A balanced diet includes a variety of foods from different food groups: fruits and vegetables, proteins, whole grains, dairy, and fats. This variety ensures that you get all the essential nutrients your body needs for growth, energy, and repairing itself.
        </p>



        <h2>Benefits of a Balanced Diet</h2>
        <ul>
          <li><strong>Weight Management:</strong> A balanced diet helps maintain a healthy weight, reducing the risk of obesity and related diseases.</li>
          <li><strong>Improved Heart Health:</strong> Eating a diet rich in fruits, vegetables, and whole grains while limiting unhealthy fats can reduce the risk of heart disease.</li>
          <li><strong>Stronger Immune System:</strong> A diet with a mix of nutrients boosts the immune system's functionality.</li>
          <li><strong>Better Mood and Energy Levels:</strong> Balanced nutrition leads to better overall mood and higher energy levels.</li>
        </ul>



        <h2>Managing Calorie Intake</h2>
        <p>
          While the total calorie intake is important, it's more crucial where these calories come from. Calories from different sources can have distinct effects on your health. For example, 200 calories from a donut are not the same as 200 calories from a bowl of fruits and vegetables.
        </p>



        <h2>Conclusion</h2>
        <p>
          In summary, a balanced diet is about more than just controlling calorie intake; it's about ensuring those calories come from a variety of healthy and nutrient-rich sources. By doing so, you can enjoy the benefits of improved health, better weight management, and an overall sense of well-being.
        </p>



</template>

<script>
import CalorieItem from './CalorieItem.vue';
import { CalorieEntry } from '@/models';

export default {
  components: {
    CalorieItem
  },
  data() {
    return {
      entries: [
        new CalorieEntry('Breakfast', 300),
        new CalorieEntry('Lunch', 500),
        new CalorieEntry('Dinner', 400),
      ],
    };
  },
  computed: {
    totalCalories() {
      return this.entries.reduce((total, entry) => total + entry.calories, 0);
    },
  },
  methods: {
    editCalorie(index) {
      const updatedLabel = prompt('Edit calorie entry label:', this.entries[index].label);
      const updatedCalories = parseInt(prompt('Edit calorie entry calories:', this.entries[index].calories), 10);

      if (updatedLabel && !isNaN(updatedCalories)) {
        this.$set(this.entries, index, new CalorieEntry(updatedLabel, updatedCalories));
      }
    },
    deleteCalorie(index) {
      const confirmDelete = confirm('Are you sure you want to delete this calorie entry?');
      if (confirmDelete) {
        this.entries.splice(index, 1);
      }
    },
    addCalorie() {
      const label = prompt('Enter food label:');
      const calories = parseInt(prompt('Enter calories:'), 10);

      if (label && !isNaN(calories)) {
        this.entries.push(new CalorieEntry(label, calories));
      }
    },
  },
};
</script>


<style scoped>

</style>
