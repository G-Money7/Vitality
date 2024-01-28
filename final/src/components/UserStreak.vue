<template>
  <div class="user-streak">
    <h3>Your Streak: {{ streak }} days</h3>
  </div>
</template>

<script>
import { db } from '@/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      userId: 'user_id',
      streak: 0,
      lastActive: null,
    };
  },
  async created() {
    await this.checkStreak();
  },
  methods: {
    async checkStreak() {
      const userDocRef = doc(db, 'users', this.userId);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        this.lastActive = docSnap.data().lastActive.toDate();
        this.streak = docSnap.data().streak;
        this.updateStreak();
      } else {

      }
    },
    updateStreak() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastActive = new Date(this.lastActive);
      lastActive.setHours(0, 0, 0, 0);

      const differenceInTime = today.getTime() - lastActive.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays === 1) {
        this.streak += 1;
      } else if (differenceInDays > 1) {
        this.streak = 1;
      }

      this.lastActive = today;
      this.updateUserStreakInFirestore();
    },
    async updateUserStreakInFirestore() {
      const userDocRef = doc(db, 'users', this.userId);
      await updateDoc(userDocRef, {
        lastActive: this.lastActive,
        streak: this.streak,
      });
    }
  }
}
</script>

<style>

</style>
