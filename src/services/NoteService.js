import { AppState } from "../AppState";

class NoteService {
  // Logic to preform front end crud functions
  async getNotes() {
    const res = JSON.parse(localStorage.getItem("notes"));
    if (res == null) {
      AppState.notes = [];
    } else {
      AppState.notes = res;
    }
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
    props in a clever way, sense im passing props from AppState to render notes
    I can simply modify that data and send the notes array back up to be saved since 
    im modifying the the global object already.
    */
    this.setNotes(AppState.notes);
    this.getNotes();
  }

  async deleteNote(id) {
    AppState.notes = AppState.notes.filter((note) => note.id !== id);
    this.setNotes(AppState.notes);
  }
}

export const noteService = new NoteService();
