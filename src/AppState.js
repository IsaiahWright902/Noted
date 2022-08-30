import { reactive } from "vue";

// AppState is acting as our global state

export const AppState = reactive({
  // For all notes- every time a note is added from note service it is pushed into the notes array
  notes: [],
});
