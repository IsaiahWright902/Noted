<template>
  <div class="row pt-3">
    <div class="col-12">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn--green-rounded btn--sm f-right"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-cy="open-note-form"
      >
        Add New Note
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add New Note</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close-button"
              ></button>
            </div>
            <form @submit.prevent="addNote()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">
                    <label>Title</label>
                    <input
                      v-model="state.newNote.title"
                      required
                      type="text"
                      data-cy="add-note-title-field"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="row pt-3">
                  <div class="col-12">
                    <label>Body</label>
                    <textarea
                      v-model="state.newNote.body"
                      required
                      cols="30"
                      rows="10"
                      data-cy="add-note-body-field"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  data-cy="add-note-submit"
                  type="submit"
                  class="btn btn--green-rounded btn--sm"
                >
                  Add Note!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { noteService } from "../services/NoteService";
import { AppState } from "../AppState";
export default {
  name: "AddNote",
  setup() {
    const state = reactive({
      newNote: {
        id: null,
        title: "",
        body: "",
        complete: false,
      },
    });
    return {
      state,
      async addNote() {
        // Sets id
        state.newNote.id = AppState.notes.length + 1;
        await noteService.addNote(state.newNote);
        // Clears Inputs
        state.newNote.title = "";
        state.newNote.body = "";
        // Closes modal automatically
        document.getElementById("close-button").click();
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.modal-title {
  font-weight: 300;
}

textarea {
  min-height: 200px;
}

.modal-footer {
  justify-content: center;
}
</style>
