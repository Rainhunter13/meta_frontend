<template>
  <div class="therapist">
    <div class="photo">
      <TherapistPhoto :photo_url="photo_url_var" />
    </div>
    <div class="info">
      <TherapistInfo :name="name_var" :methods="methods_var" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TherapistPhoto from "@/components/TherapistPhoto.vue";
import TherapistInfo from "@/components/TherapistInfo";

import { get_therapist } from "@/services/therapist_services";

export default {
  name: "Therapist",
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

<style scoped>
.therapist {
  position: relative;
  margin: auto;
  width: 60%;
  height: 65%;
  border: solid gray 1px;
}
.photo {
  float: left;
  position: relative;
  width: 32%;
  height: 80%;
  top: 5%;
  left: 3%;
}
.info {
  position: relative;
  float: right;
  width: 61%;
  height: 80%;
  top: 5%;
  right: 3%;
}
</style>
