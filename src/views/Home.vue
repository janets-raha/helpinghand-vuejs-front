<template>
  <b-container>
    <img alt="HelpHandImage" src="../assets/helpinghandHP.jpeg" />
    <HelloWorld msg="Welcome to the Helping Hand Platform" />
    <b-row align-v="center">
      <mission-card></mission-card>
      <mission-card></mission-card>
      <mission-card></mission-card>
      <mission-card></mission-card>
  <!--<div class="home">-->
    <img alt="HelpHandImage" src="../assets/helpinghandHP.jpeg" />
    <HelloWorld msg="Welcome to the Helping Hand Platform" />
  <!--</div>-->
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MissionCard from "@/components/MissionCard.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    "mission-card": MissionCard
  }
};
</script>
