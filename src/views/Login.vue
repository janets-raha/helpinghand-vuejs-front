<template>
  <div class="login">
    <img alt="HelpingHand logo" src="../assets/logo.jpeg" />
    <LoginUser msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginUser from "@/components/LoginUser.vue";

export default {
  name: "Login",
  components: {
    LoginUser
  }
};
</script>