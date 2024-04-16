<script setup>
import { reactive, watchEffect } from "vue";
import { inject } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";

const route = useRoute();
const posts = inject("posts");
const post = reactive({});
const loading = inject("loading");

watchEffect(() => {
  if (posts.value) {
    post.value = posts.value[route.params.id - 1];
  }
});
function deletePost() {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function () {
      Swal.fire({
        title: "Thanks!",
        text: `Post (${route.params.id}) deleted successfully`,
        icon: "warning",
        confirmButtonText: "Ok",
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-5">
    <div class="card">
      <div class="card-header">
        {{ post.value.title }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.value.body }}</li>
      </ul>
      <div class="card-footer">
        <button @click="deletePost" class="btn btn-sm btn-danger me-4">Delete</button>
        <RouterLink class="btn btn-sm btn-dark" :to="{ name: 'editPost', params: { id: post.id } }">Edit</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
