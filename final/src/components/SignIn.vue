<template>
  <div>
    <h2>Sign In</h2>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="signIn">Sign In</button>
    <button @click="$emit('close')">Cancel</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '@/firebaseConfig';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async signIn() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$emit('authenticated', auth.currentUser);
      } catch (error) {
        this.error = error.message;
      }
    }
  }
}
</script>
