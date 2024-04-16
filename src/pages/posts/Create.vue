<script setup>
import PostForm from "@/components/posts/Form.vue";
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const loadingBtn = ref(false);

function createPost(formData) {
  loadingBtn.value = true;
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: formData.title,
      body: formData.body,
      userId: 1,
    })
    .then(function () {
      loadingBtn.value = false;

      Swal.fire({
        title: "Thanks!",
        text: "Post created successfully",
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
  <div class="col-md-6">
    <h2 class="mb-5">Create Post :</h2>

    <PostForm @formData="createPost" :loadingBtn="loadingBtn" button-text="Create Post" />
  </div>
</template>

<style scoped></style>
