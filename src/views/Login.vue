<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
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