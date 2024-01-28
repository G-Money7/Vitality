<template>
  <div id="app">
    <DailyAffirmation />
    <br>
    <br>
    <UserComponent/>
    <br>
    <br>
    <UserStreak />
    <br>
    <br>
    <WorkoutTracker />
    <br>
    <br>
    <CalorieLogger />
    <br>
    <br>
    <BmiCalculator />
    <br>
    <br>
    <MeditationTimer />
    <br>
    <br>
    <daily-journal />
    <br>
    <br>
    <water-intake-display />
  </div>
</template>

<script>
import WorkoutTracker from './components/WorkoutTracker.vue';
import CalorieLogger from './components/CalorieLogger.vue';
import BmiCalculator from './components/BmiCalculator.vue';
import MeditationTimer from './components/MeditationTimer.vue';
import DailyAffirmation from "@/components/DailyAffirmation.vue";
import DailyJournal from "@/components/Dailyjournal.vue";
import signUp from "@/components/SignUp.vue";
import signIn from "@/components/SignIn.vue";
import UserComponent from "@/components/UserComponent.vue";
import WaterIntakeLogic from "@/components/WaterIntakeLogic.vue";
import WaterIntakeDisplay from "@/components/WaterIntakeDisplay.vue";
import UserStreak from "@/components/UserStreak.vue";
export default {
  components: {
    UserStreak,
    WaterIntakeLogic,
    WaterIntakeDisplay,
    UserComponent,
    DailyJournal,
    WorkoutTracker,
    CalorieLogger,
    BmiCalculator,
    MeditationTimer,
    DailyAffirmation,
    signIn,
    signUp,

  },
};
</script>

<style>

</style>
