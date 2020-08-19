<template>
  <div class="registern">
    <img alt="HelpingHand logo" src="../assets/logo.jpeg" />
    <RegisterNgo
      msg="Create your account and recruit qualified passionates volunteers for your missions"
    />
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
