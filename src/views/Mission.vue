<template>
  <div>
    <CreateMissionForm />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateMissionForm from "@/components/CreateMissionForm.vue";

export default {
  name: "Mission",
  components: {
    CreateMissionForm
  }
};
</script>
