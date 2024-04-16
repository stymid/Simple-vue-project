<script setup>
import { defineProps, defineEmits, inject, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  buttonText: String,
  loadingBtn: Boolean,
});
const emit = defineEmits(["formData"]);

const route = useRoute();
const loading = inject("loading");
const post = reactive({});
const posts = inject("posts");
const form = reactive({
  title: "",
  titleErrorText: "",
  body: "",
  bodyErrorText: "",
});

watchEffect(() => {
  if (posts.value && props.buttonText !== "Create Post") {
    post.value = posts.value[route.params.id - 1];
    console.log(post.value);
  }
});

function validate() {
  if (form.title === "") {
    form.titleErrorText = "Title is required";
  } else {
    form.titleErrorText = "";
  }
  if (form.body === "") {
    form.bodyErrorText = "Body is required";
  } else {
    form.bodyErrorText = "";
  }

  if (form.title !== "" && form.body !== "") {
    emit("formData", form);
  }
}

function setInput() {
  if (post.value !== undefined) {
    form.title = post.value.title;
    form.body = post.value.body;
  }
}
setInput();
function createPost() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: form.title,
      body: form.body,
      userId: 1,
    })
    .then(function (response) {
      loading.value = false;
      form.title = "";
      form.body = "";
      Swal.fire({
        title: "این یه سایته الکیه ولی آفرین!",
        text: "Post created successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
</script>

<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input type="text" class="form-control" v-model.lazy.trim="form.title" />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea class="form-control" rows="6" v-model.lazy.trim="form.body"></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
    </div>

    <button type="submit" class="btn btn-dark" :disabled="props.loadingBtn">
      <div v-if="props.loadingBtn" class="spinner-border spinner-border-sm" role="status"></div>
      {{ props.buttonText }}
    </button>
  </form>
</template>

<style scoped></style>
