<template>
  <div class="registerngo">
    <img alt="HelpingHand logo" src="../assets/logo.jpeg" />
    <RegisterNgoForm
      msg="Create your account and recruit qualified passionates volunteers for your missions"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterNgoForm from "@/components/RegisterNgoForm.vue";

export default {
  name: "RegisterNgo",
  components: {
    RegisterNgoForm
  }
};
</script>
