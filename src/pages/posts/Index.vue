<script setup>
import { inject } from "vue";

const posts = inject("posts");
const loading = inject("loading");
</script>

<template>
  <div>
    <RouterLink class="btn btn-dark" :to="{ name: 'createPost' }"> Create Post </RouterLink>
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
    <div class="card">
      <div class="card-header">
        <RouterLink :to="{ name: 'postId', params: { id: post.id } }">
          {{ post.title }}
        </RouterLink>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
