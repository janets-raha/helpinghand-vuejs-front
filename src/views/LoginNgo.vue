<template>
  <div class="loginngo">
    <img alt="Helpinghand logo" src="../assets/logo.jpeg" />
    <LoginNgoForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginNgoForm from "@/components/LoginNgoForm.vue";

export default {
  name: "LoginNgo",
  components: {
    LoginNgoForm
  }
};
</script>
