<script setup>
import { ref } from "vue";
import axios from "axios";
import UserCardView from "@/components/users/CardView.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const user = ref({});
const loading = ref(true);

function getUser() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    .then(function (response) {
      user.value = response.data;
      loading.value = false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
getUser();
</script>

<template>
  <div v-if="loading">
    <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else class="row g-3">
    <div class="col-md-4">
      <UserCardView :user="user" />
    </div>
  </div>
</template>

<style scoped></style>
