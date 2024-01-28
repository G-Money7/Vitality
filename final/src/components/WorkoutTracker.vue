<template>
  <div>
    <h2>Workout Tracker</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" v-model="newWorkout.name" class="form-input" />
    </div>
    <div class="form-group">
      <label for="sets">Sets:</label>
      <input type="number" v-model="newWorkout.sets" class="form-input" />
    </div>
    <div class="form-group">
      <label for="reps">Reps:</label>
      <input type="number" v-model="newWorkout.reps" class="form-input" />
    </div>
    <div class="form-group">
      <button @click="addWorkout">Add Workout</button>
      <button @click="clearTable">Clear Table</button>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Completed</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(workout, index) in workouts" :key="index">
        <td>{{ workout.name }}</td>
        <td>{{ workout.sets }}</td>
        <td>{{ workout.reps }}</td>
        <td>
          <input type="checkbox" v-model="workout.completed" />
        </td>
        <td>
          <button @click="deleteWorkout(index)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>


      <h1>The Importance of Regular Exercise</h1>


        <p>
          Regular exercise is a crucial component of a healthy lifestyle. Engaging in physical activity offers numerous benefits for both physical and mental health, and it's an essential practice for maintaining overall well-being.
        </p>



        <h2>Benefits of Regular Exercise</h2>
        <ul>
          <li><strong>Improves Cardiovascular Health:</strong> Exercise strengthens the heart and improves circulation, reducing the risk of heart disease and stroke.</li>
          <li><strong>Weight Management:</strong> It helps in maintaining a healthy weight, or losing weight, by burning calories and improving metabolism.</li>
          <li><strong>Enhances Mental Health:</strong> Physical activity releases endorphins, which reduce the perception of pain and trigger positive feelings.</li>
          <li><strong>Boosts Energy Levels:</strong> Regular exercise improves muscle strength and boosts endurance, providing more energy.</li>
          <li><strong>Better Sleep:</strong> Regular physical activity can help you fall asleep faster, sleep more deeply, and wake up feeling more energetic and refreshed.</li>
          <li><strong>Improves Bone and Muscle Health:</strong> Activities like weightlifting can stimulate muscle building when paired with adequate protein intake.</li>
        </ul>



        <h2>Types of Exercise</h2>
        <p>
          It's important to include different types of exercise in your routine: aerobic (like running or swimming), strength training, flexibility exercises, and balance exercises. Each type offers unique benefits and contributes to your overall health.
        </p>



        <h2>Getting Started with Exercise</h2>
        <p>
          Starting an exercise routine can be challenging, but the key is to find activities you enjoy. Start slow and gradually increase the intensity and duration of your workouts. Remember, consistency is more important than intensity when starting out.
        </p>



        <h2>Conclusion</h2>
        <p>
          Incorporating regular exercise into your lifestyle can significantly enhance your health and well-being. Whether it's a daily walk, a gym session, or a yoga class, finding the time to move your body can make a substantial difference in your overall quality of life.
        </p>





</template>

<script>
import { Workout } from '@/models';

export default {
  data() {
    return {
      workouts: [
        new Workout('Push-ups', 3, 10, false),
        new Workout('Squats', 4, 12, false),

      ],
      newWorkout: {
        name: '',
        sets: null,
        reps: null,
        completed: false,
      },
    };
  },
  methods: {
    addWorkout() {
      if (this.newWorkout.name && this.newWorkout.sets && this.newWorkout.reps) {
        this.workouts.push({ ...this.newWorkout });
        this.clearForm();
      } else {
        alert('Please fill in all workout details.');
      }
    },
    deleteWorkout(index) {
      const confirmDelete = confirm('Are you sure you want to delete this workout?');
      if (confirmDelete) {
        this.workouts.splice(index, 1);
      }
    },
    clearForm() {
      this.newWorkout = {
        name: '',
        sets: null,
        reps: null,
        completed: false,
      };
    },
    clearTable() {
      const confirmClear = confirm('Are you sure you want to clear the table?');
      if (confirmClear) {
        this.workouts = [];
      }
    },
  },
};
</script>

<style scoped>

.form-group {
  margin-bottom: 15px;
}

.form-input {
  display: inline-block;
  width: 200px;
  padding: 8px;
  box-sizing: border-box;
  margin-right: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}
</style>
