<template>
  <div></div>
</template>

<script>
export default {
  name: 'WaterIntakeLogic',
  data() {
    return {
      totalIntake: 0, // in milliliters
    };
  },
  methods: {
    addIntake(amount) {
      this.totalIntake += amount;
      this.$emit('update', {
        totalIntake: this.totalIntake,
        message: this.encouragingMessage()
      });
    },
    encouragingMessage() {
      if (this.totalIntake < 1000) {
        return "Keep going, you're doing great!";
      } else if (this.totalIntake < 2000) {
        return "Awesome, you're halfway there!";
      } else if (this.totalIntake < 3000) {
        return "Amazing, almost at your goal!";
      } else {
        return "Congratulations, you've reached your goal!";
      }
    },
  },
};
</script>
