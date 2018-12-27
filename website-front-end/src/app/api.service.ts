import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get("/api/projects", {observe: 'response'});
  }

  deleteProject(pageId : number) {
    return this.http.delete("/api/projects/" + pageId, {observe: 'response'} );
  }

  createProject(project : Project) {
    var postData = {
      "name" : project.title,
      "content" : project.content,
      "symLink" : project.linkName,
    };
    return this.http.post("/api/projects", postData, {observe: 'response'});
  }
}
