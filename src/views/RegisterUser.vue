<template>
  <div class="registerusers">
    <img
      alt="image of group of volunteers"
      src="../assets/helpinghandHP.jpeg"
    />
    <RegisterUserForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterUserForm from "@/components/RegisterUserForm.vue";

export default {
  name: "RegisterUsers",
  components: {
    RegisterUserForm
  }
};
</script>
