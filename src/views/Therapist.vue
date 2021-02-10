<template>
  <div class="home">
    <TherapistPhoto :photo_url="photo_url_var" />
    <TherapistInfo :name="name_var" :methods="methods_var" />
  </div>
</template>

<script>
// @ is an alias to /src
import TherapistPhoto from "@/components/TherapistPhoto.vue";
import TherapistInfo from "@/components/TherapistInfo";

import { get_therapist } from "@/services/therapist_services";

export default {
  name: "Home",
  components: {
    TherapistPhoto,
    TherapistInfo
  },
  data() {
    return {
      photo_url_var: get_therapist(this.$route.params.id)["photo_url"],
      name_var: get_therapist(this.$route.params.id)["name"],
      methods_var: get_therapist(this.$route.params.id)["methods"]
    };
  }
};
</script>
