<template>
  <div class="EditUser">
    <img
      alt="image of group of volunteers"
      src="../assets/helpinghandHP.jpeg"
    />
    <EditUserForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import EditUserForm from "@/components/EditUserForm.vue";

export default {
  name: "EditUser",
  components: {
    EditUserForm
  }
};
</script>
