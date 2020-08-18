<template>
  <div class="volunteers">
    <img alt="image of group of volunteers" src="../assets/helpinghandHP.jpeg" />
    <RegisterUser msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterUser from "@/components/RegisterUser.vue";

export default {
  name: "Volunteers",
  components: {
    RegisterUser
  }
};
</script>
