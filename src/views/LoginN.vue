<template>
  <div class="loginn">
    <img alt="Helpinghand logo" src="../assets/logo.jpeg" />
    <LoginNgo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginNgo from "@/components/LoginNgo.vue";

export default {
  name: "LoginN",
  components: {
    LoginNgo
  }
};
</script>
