<template>
  <div class="registern">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RegisterNgo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterNgo from "@/components/RegisterNgo.vue";

export default {
  name: "RegisterN",
  components: {
    RegisterNgo
  }
};
</script>
