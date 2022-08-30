import { AppState } from "../AppState";

class NoteService {
  // Logic to preform front end crud functions
  async initLocalStorage() {
    // Check to see if notes have already been initialized
    let initCheck = await localStorage.getItem("notes");
    if (initCheck == null) {
      console.log("setting notes");
      let testNote = {
        title: "test",
        body: "hello this is a note",
        checked: false,
      };
      let testNote2 = {
        title: "test2",
        body: "hello this is a note",
        checked: false,
      };
      let notes = [testNote, testNote2];
      await localStorage.setItem("notes", JSON.stringify(notes));
      console.log(res);
    } else {
      console.log("notes already exist");
      //   await localStorage.removeItem("notes");
      let res = await localStorage.getItem("notes");
      console.log(JSON.parse(res));
    }

    // localStorage.setItem("notes", response.data);
  }

  async getNotes() {
    const res = JSON.parse(localStorage.getItem("notes"));
    if (res == null) {
      AppState.notes = [];
    } else {
      AppState.notes = res;
    }
  }

  async addNote(newNote) {
    AppState.notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(AppState.notes));
    this.getNotes();
  }
}

export const noteService = new NoteService();
