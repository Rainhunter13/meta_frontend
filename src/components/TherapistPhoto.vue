<template>
  <div>
    <h1>
      <img :src="photo_url" alt="therapist_info" width="400" height="500" />
    </h1>
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
