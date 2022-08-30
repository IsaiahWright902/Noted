import { reactive } from "vue";

// AppState is acting as our global storage

export const AppState = reactive({
  notes: [],
  activeNote: {},
});
