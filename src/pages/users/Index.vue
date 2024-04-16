<script setup>
import { ref } from "vue";
import axios from "axios";
import UserCardView from "@/components/users/CardView.vue";

const users = ref([]);
const loading = ref(true);
function getUsers() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
      users.value = response.data;
      loading.value = false;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
getUsers();
</script>

<template>
  <div class="container mt-5">
    <div v-if="loading">
      <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="row g-3">
      <div class="col-md-4" v-for="(user, index) in users" :key="user.id">
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
