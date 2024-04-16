<script setup>
import PostForm from "@/components/posts/Form.vue";
import { ref, inject } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

const loadingBtn = ref(false);
const post = ref({});
const route = useRoute();
const loading = inject("loading");

function updatePost(formData) {
  loadingBtn.value = true;
  console.log();
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
      id: route.params.id,
      title: formData.title,
      body: formData.body,
      userId: 1,
    })
    .then(function () {
      loadingBtn.value = false;

      Swal.fire({
        title: "Thanks!",
        text: "Post update successfully",
        icon: "success",
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

  <div v-else class="col-md-6">
    <h2 class="mb-5">Edit Post :</h2>

    <PostForm @formData="updatePost" :loadingBtn="loadingBtn" button-text="Edit Post" />
  </div>
</template>

<style scoped></style>
