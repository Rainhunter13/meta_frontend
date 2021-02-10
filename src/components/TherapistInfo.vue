<template>
  <div id="info">
    <div id="name_block">
      <a id="name">{{ name }}</a>
    </div>
    <a id="methods_heading" style="text-align: left"> Методы:</a>
    <br /><br />
    <span v-for="method in methods" :key="method" id="methods">
      <a class="method"> {{ method }} </a>
    </span>
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
<style scoped>
#info {
  width: 100%;
  height: 100%;
}
#name_block {
  width: 100%;
  height: 15%;
  text-align: center;
  border: 1px solid lightgray;
  background-color: antiquewhite;
}
#name {
  position: relative;
  top: 22%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  align-items: center;
}
#methods_heading {
  text-align: left;
  position: relative;
  left: 1%;
  top: 3.5%;
  font-weight: bold;
  font-size: 25px;
}
#methods {
  position: relative;
  top: 2%;
  font-size: 20px;
  margin-right: 2%;
}
.method {
  position: relative;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: lightsalmon;
  padding: 1%;
  line-height: 40px;
}
</style>
