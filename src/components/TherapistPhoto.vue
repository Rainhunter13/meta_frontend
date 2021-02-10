<template>
  <div>
    <h1>
      {{photo_url}}
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
