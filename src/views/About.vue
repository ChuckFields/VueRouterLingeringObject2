<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import LingeringObject from "../model/LingeringObject.js";
import LingeringChild from "../model/LingeringChild.js";

export default {
  name: 'about',
  data() {
    return {
      something: false,
    }
  },
  mounted() {
    const children = [];
    children.push(new LingeringChild({
      id: Math.floor((Math.random() * 100000) + 1)
    }));

    this.$store.dispatch("setLingeringObj", new LingeringObject({
      id: Math.floor((Math.random() * 100000) + 1),
      children
    }));
  },
  beforeDestroy() {
    console.log("About- beforeDestroy()");
  },
  watch: {
    '$store.state.lingeringObj': function () {
      const children = this.$store.getters.lingeringObjChildren;
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("setLingeringObj", null);
    next();
  },
}
</script>
