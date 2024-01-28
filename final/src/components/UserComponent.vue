<template>
  <div>
    <div v-if="user">
      <p>Welcome, {{ user.email }}!</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <button @click="showSignIn = true">Sign In</button>
      <button @click="showSignUp = true">Sign Up</button>

      <sign-in v-if="showSignIn" @close="showSignIn = false" @authenticated="userAuthenticated"></sign-in>
      <sign-up v-if="showSignUp" @close="showSignUp = false" @authenticated="userAuthenticated"></sign-up>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebaseConfig.js';
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      user: null,
      showSignIn: false,
      showSignUp: false
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.user = null;
      }).catch((error) => {
        console.error("Logout Error: ", error);
      });
    },
    userAuthenticated(newUser) {
      this.user = newUser;
      this.showSignIn = false;
      this.showSignUp = false;
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
}
</script>
