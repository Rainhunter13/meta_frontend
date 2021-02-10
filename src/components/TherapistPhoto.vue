<template>
  <div id="photo">
    <img :src="photo_url" alt="therapist_info" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    photo_url: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#photo {
  margin: auto;
  /*width: 100%;*/
  /*height: 100%;*/
}
img {
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
}
</style>
