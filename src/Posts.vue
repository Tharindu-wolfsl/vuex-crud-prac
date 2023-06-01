<template>
  <div class="POSTS">
    <pre>{{ posts }}</pre>
    <h1 class="text-danger">This is post page {{ name }}</h1>
    <p>Count: {{ count }}</p>
    <button class="btn btn-success" @click="increment">Increment</button>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Posts",
  data() {
    return {
      name: "Tharindu",
    };
  },
  computed: {
    ...mapState(["count", "posts"]), // Use the count state in the component
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    increment() {
      this.$store.dispatch("increment"); // Dispatch the increment action
    },
  },
};
</script>

<style>
</style>