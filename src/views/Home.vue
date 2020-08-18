<template>
  <div class="home">
    <img alt="HelpHandImage" src="../assets/helpinghandHP.jpeg" />
    <HelloWorld msg="Welcome to the Helping Hand Platform" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
