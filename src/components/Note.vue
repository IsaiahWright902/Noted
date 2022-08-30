<template>
  <div class="col-xl-4 col-lg-6 col-sm-6 pt-3 smooth">
    <div class="note">
      <div class="options">
        <!-- Toggle Edit Note -->
        <svg
          v-if="!state.editNote"
          @click="state.editNote = !state.editNote"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square edit-note"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        <!-- Save Edit Note -->
        <svg
          v-else
          @click="updateNote()"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-lg save-edit"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
          />
        </svg>
        <!-- Delete Note -->
        <svg
          @click="deleteNote()"
          v-if="!state.editNote"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash3 delete-note"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
        <!-- Cancel Edit Note -->
        <svg
          v-else
          @click="state.editNote = false"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x delete-note"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <div class="note-body">
        <div class="row pt-3">
          <div class="col-12 text-center">
            <input
              v-if="state.editNote"
              v-model="note.title"
              type="text"
              class="form-control-sm w-100"
            />
            <p v-else class="note-title">{{ note.title }}</p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-12">
            <textarea
              v-model="note.body"
              v-if="state.editNote"
              class="form-control-sm edit-textarea"
              cols="30"
              rows="10"
            ></textarea>
            <p v-else class="note-body">{{ note.body }}</p>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-12">
            <p class="note-completed" v-if="note.completed">
              Completed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2-circle completed-icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                />
                <path
                  d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Notification from "../utils/Notification";
import { noteService } from "../services/NoteService";
export default {
  name: "Note",
  props: { note: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      note: props.note,
      editNote: false,
    });
    return {
      state,
      async updateNote() {
        await noteService.updateNote();
        await Notification.Saved();
        state.editNote = false;
      },

      async deleteNote() {
        const confirm = await Notification.confirm();
        if (confirm) {
          await noteService.deleteNote(state.note.id);
          Notification.Saved();
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.note {
  position: relative;
  max-height: 600px;
  border-radius: 40px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  @include respond(phone) {
    max-height: 400px;
  }
  &:hover {
    box-shadow: 0 2px 4px $green;
    .options {
      display: flex;
      gap: 10px;
    }
  }
}

.options {
  transition: all 0.5s;
  position: absolute;
  top: 3%;
  right: 8%;
  display: none;
  gap: 10px;
}

.note-body {
  margin: 15px 40px;
  @include respond(phone) {
    // padding: 10px 0;
    margin: 20px 10px;
  }
}

.edit-note {
  color: $orange;
  cursor: pointer;
}

.delete-note {
  color: $red;
  cursor: pointer;
}

.save-edit {
  color: $green;
  cursor: pointer;
}

.edit-textarea {
  min-height: 200px;
}

.form-control-sm {
  margin: 10px 0;
}

.note-title {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 400;
}

.note-completed {
  font-family: "Montserrat", sans-serif;
  color: $green;
}

.completed-icon {
}
</style>
