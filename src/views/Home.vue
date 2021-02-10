<style scoped></style>
<template>
  <div id="home">
    <h1>
      All available therapists are as follow:
    </h1>
    <a class="therapist"> ID - Name - Profile Link</a> <br />
    <hr style="width:50%;text-align:left;margin-left:0" />
    <span v-for="therapist in all_therapists" :key="therapist">
      <a class="therapist"> {{ therapist["id"] }} - </a>
      <a class="therapist"> {{ therapist["name"] }} - </a>
      <a
        class="therapist"
        :href="'http://localhost:8080/#/therapist/' + therapist['id']"
      >
        http://localhost:8080/#/therapist/{{ therapist["id"] }}
      </a>
      <br />
    </span>
  </div>
</template>

<script>
import { get_all_therapists } from "@/services/therapist_services";

export default {
  name: "Home",
  data() {
    return {
      all_therapists: get_all_therapists()
    };
  }
};
</script>

<style scoped>
.therapist {
  font-size: 20px;
  line-height: 30px;
}
#home {
  padding-left: 1%;
}
</style>
