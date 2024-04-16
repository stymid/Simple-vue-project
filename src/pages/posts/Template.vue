<template>
  <div class="container mt-5">
    <div class="row g-3">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { provide } from "vue";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(false);

    function getPosts() {
      loading.value = true;
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
          console.log(posts.value);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPosts();
    provide("posts", posts);
    provide("loading", loading);
  },
};
</script>

<style></style>
