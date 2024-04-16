<script setup>
const props = defineProps(["user"]);
</script>
<template>
  <div class="card" style="width: 18rem">
    <div class="card-header">
      <RouterLink :to="{ name: 'userId', params: { id: user.id } }">{{ user.name }}</RouterLink>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">User name:{{ user.username }}</li>
      <li class="list-group-item">Email: {{ user.email }}</li>
      <li class="list-group-item">Phone: {{ user.phone }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
