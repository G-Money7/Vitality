<template>
  <div>
    <h2>Sign Up</h2>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="signUp">Sign Up</button>
    <button @click="$emit('close')">Cancel</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '@/firebaseConfig';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async signUp() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$emit('authenticated', auth.currentUser);
      } catch (error) {
        this.error = error.message;
      }
    }
  }
}
</script>
