<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12 text-center">
        <div class="heading-container">
          <h1 class="page-heading">Noted</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check2-circle heading-icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
            />
            <path
              d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
            />
          </svg>
        </div>
        <p>
          A app that helps you keep organized by letting you leave custom
          tailored notes for yourself.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { notesService } from "../services/NoteService";
export default {
  name: "Home",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

.heading-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-heading {
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
  font-weight: 300;
}

.heading-icon {
  height: 30px;
  width: 30px;
  color: $green;
}
</style>
