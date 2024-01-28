<template>
  <div id="app">
    <h1>Daily Affirmation</h1>
    <p v-if="affirmation">{{ affirmation }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'DailyAffirmation',
  data() {
    return {
      affirmation: null
    };
  },
  mounted() {
    this.fetchAffirmation();
  },
  methods: {
    async fetchAffirmation() {
      try {
        const response = await fetch('https://www.affirmations.dev');
        const data = await response.json();
        this.affirmation = data.affirmation;
      } catch (error) {
        console.error('Error fetching daily affirmation:', error);
      }
    }
  }
}
</script>

<style>

</style>
