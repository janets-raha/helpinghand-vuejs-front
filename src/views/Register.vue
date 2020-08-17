<template>
  <div class="register">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RegisterUser msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterUser from "@/components/RegisterUser.vue";

export default {
  name: "Register",
  components: {
    RegisterUser
  }
};
</script>
