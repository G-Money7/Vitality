<template>
  <div class="meditation-timer">
    <h2>Meditation Timer</h2>
    <div class="input-group">
      <label for="minutes">Minutes:</label>
      <input type="number" v-model="minutes" />
    </div>
    <div v-if="!meditationFinished" class="input-group">
      <label for="moodBefore">Mood Before Meditation:</label>
      <input type="text" v-model="moodBefore" />
    </div>
    <button @click="startMeditation" :disabled="meditationFinished" class="start-button">Start Meditation</button>
    <div v-if="showMoodInput" class="input-group">
      <label for="moodAfter">Mood After Meditation:</label>
      <input type="text" v-model="moodAfter" />
      <button @click="submitMood" class="submit-button">Submit Mood</button>
      <p class="inspiration-message">{{ inspirationMessage }}</p>
    </div>
    <p v-if="meditationStatus" class="status-message">{{ meditationStatus }}</p>
    <div v-if="timerVisible" class="timer">
      <p>Time Remaining: {{ minutes }} minutes</p>
    </div>
    <div v-if="submittedMood" class="input-group">
      <p>Submitted Mood After Meditation: {{ submittedMood }}</p>
    </div>
  </div>


      <h1>Embracing Mindfulness and Meditation</h1>


        <p>
          Meditation is an ancient practice that focuses on mindfulness and mental clarity. It has become increasingly popular in the modern world as a way to reduce stress, enhance focus, and promote a sense of inner peace.
        </p>



        <h2>Benefits of Meditation</h2>
        <ul>
          <li><strong>Reduces Stress:</strong> Meditation is known to decrease stress and anxiety levels, helping in managing daily stressors more effectively.</li>
          <li><strong>Improves Concentration:</strong> Regular practice enhances focus, attention, and the ability to work under stress.</li>
          <li><strong>Promotes Emotional Health:</strong> Meditation can lead to an improved self-image and a more positive outlook on life.</li>
          <li><strong>Enhances Self-Awareness:</strong> It helps you develop a stronger understanding of yourself and grow into your best self.</li>
          <li><strong>Can Decrease Blood Pressure:</strong> Meditation can improve physical health by reducing strain on the heart.</li>
          <li><strong>Helps in Fighting Addictions:</strong> The discipline developed through meditation can help break dependencies by increasing self-control and awareness of triggers.</li>
        </ul>



        <h2>Tips for Effective Meditation Practice</h2>
        <p>
          Begin with short sessions, focus on your breath, and don't worry about clearing your mind completely. The goal is to become more aware and get comfortable with being still. Find a quiet space and use meditation apps or guided sessions if needed.
        </p>



        <h2>Mindfulness in Everyday Life</h2>
        <p>
          Mindfulness is about being present in the moment. It can be practiced at any time, whether you're eating, walking, or just breathing. The key is to bring full attention to whatever you're doing, free from distraction.
        </p>



        <h2>Conclusion</h2>
        <p>
          Incorporating meditation into your daily routine can significantly improve your quality of life. It's a journey of personal growth that enhances both mental and physical well-being.
        </p>



</template>

<script>


export default {
  data() {
    return {
      minutes: null,
      moodBefore: null,
      moodAfter: null,
      submittedMood: null,
      meditationStatus: null,
      meditationFinished: false,
      timerVisible: false,
      timer: null,
      inspirationMessage: null,
      showMoodInput: false,
    };
  },
  methods: {
    startMeditation() {
      if (this.minutes && this.moodBefore && !this.meditationFinished) {
        this.meditationStatus = `Meditation started for ${this.minutes} minutes. Mood before: ${this.moodBefore}.`;
        this.meditationFinished = true;
        this.timerVisible = true;


        this.timer = setInterval(() => {
          if (this.minutes > 0) {
            this.minutes--;
          } else {
            clearInterval(this.timer);
            this.timerVisible = false;

            this.inspirationMessage = this.generateInspirationMessage();

            this.showMoodInput = true;
          }
        }, 60000);
      } else if (this.minutes && this.moodBefore && this.moodAfter && this.meditationFinished) {
        this.meditationStatus = `Meditation complete for ${this.minutes} minutes. Mood before: ${this.moodBefore}, Mood after: ${this.moodAfter}.`;

        this.inspirationMessage = this.generateInspirationMessage();

        this.showMoodInput = true;
      } else {
        alert('Please enter minutes, mood before, and mood after.');
      }
    },
    generateInspirationMessage() {
      const messages = [
        'Great job! You are on your way to a more peaceful mind.',
        'Congratulations on completing your meditation. Keep up the good work!',
        'You did it! Take a moment to appreciate the stillness within you.',
        'Well done! Each meditation session brings you closer to inner peace.',
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },
    submitMood() {
      if (this.moodAfter) {
        this.submittedMood = this.moodAfter;
      } else {
        alert('Please enter your mood after meditation.');
      }
    },
  },
};
</script>

<style scoped>

</style>
