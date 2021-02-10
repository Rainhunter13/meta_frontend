<template>
  <div>
    <h1>id: {{ name }}</h1>
    <b>{{ methods }}</b>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    name: String,
    methods: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
