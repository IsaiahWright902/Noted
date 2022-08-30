import { AppState } from "../AppState";

// Logic to preform front end crud functions
class NoteService {
  // Checks local storage, if there are no notes, sets AppState to an empty array
  async getNotes() {
    const res = JSON.parse(localStorage.getItem("notes"));
    if (res == null) AppState.notes = [];
    else AppState.notes = res;
  }

  // Helper function that sets notes in local storage
  setNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  async addNote(newNote) {
    AppState.notes.push(newNote);
    this.setNotes(AppState.notes);
    this.getNotes();
  }

  async updateNote() {
    /* 
    Let me explain here, normally we would send an id to an update function
    and modify the data from there. For this simple project I decided to just use
    props in a clever way, sense I am passing props from AppState to render notes
    I can simply modify the prop data and send the notes array back up to local storage 
    since im modifying data directly from local storage.
    */
    this.setNotes(AppState.notes);
    this.getNotes();
  }

  // Filters out id from notes array and saves it to local storage
  // Very similar function could be used for getById, my solution would be to set it to a local object in AppState to render info to a page.
  async deleteNote(id) {
    AppState.notes = AppState.notes.filter((note) => note.id !== id);
    this.setNotes(AppState.notes);
  }
}

export const noteService = new NoteService();
