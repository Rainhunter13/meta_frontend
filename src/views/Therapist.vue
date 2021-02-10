<template>
  <div class="home">
    <TherapistPhoto photo_url="photo_url here ..." />
    <TherapistInfo :name="$route.params.id" :methods="['abc', 'ddd']" />
  </div>
</template>

<script>
// @ is an alias to /src
import TherapistPhoto from "@/components/TherapistPhoto.vue";
import TherapistInfo from "@/components/TherapistInfo";

// const id = this.routerView

export default {
  name: "Home",
  components: {
    TherapistPhoto,
    TherapistInfo
  }
};
</script>
