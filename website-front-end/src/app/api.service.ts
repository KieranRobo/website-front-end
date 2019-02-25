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

  getProjectById(projectId : number) {
    return this.http.get("/api/projects/" + projectId, {observe: 'response'});
  }

  getProjectByLink(projectId : String) {
    return this.http.get("/api/projects/" + projectId, {observe: 'response'});
  }

  deleteProject(pageId : number) {
    return this.http.delete("/api/projects/" + pageId, {observe: 'response'} );
  }

  createProject(project : Project) {
    var postData = {
      "name" : project.title,
      "content" : project.content,
      "symLink" : project.linkName,
      "displayImage" : project.displayImage
    };
    return this.http.post("/api/projects", postData, {observe: 'response'});
  }

  editProject(project : Project) {
    var postData = {
      "name" : project.title,
      "content" : project.content,
      "symLink" : project.linkName,
      "displayImage" : project.displayImage
    };
    return this.http.put("/api/projects/" + project.id, postData, {observe: 'response'});
  }
}
