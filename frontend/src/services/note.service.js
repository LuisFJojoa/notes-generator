import http from "./http-common";

class NoteDataService  {

  create(note) {
    return http.post("/notes", note);
  }
  update(id, note) {
    return http.put(`/notes/${id}`, note);
  }
  
  delete(id) {
    return http.delete(`/notes/${id}`);
  }

  findByState(state) {
    return http.get(`/notes?state=${state}`);
  }
}

export default new NoteDataService()