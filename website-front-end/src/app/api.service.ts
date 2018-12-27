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
    return this.http.get("/api/projects").pipe(
      map((res:Response)=> res));
  }

  deleteProject(pageId : number) {
    return this.http.delete("/api/projects/" + pageId);
  }

  createProject(project : Project) {
    var postData = {
      "name" : project.title,
      "content" : project.content,
      "symLink" : project.linkName,
    };
    return this.http.post("/api/projects", postData, {observe: 'response'});

    /*
    const headers = new Headers({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    return this.http.post("/api/project/new?display_name=" + project.title + "&display_content=" + project.content + "&link_name=" + project.linkName , headers);
    */
  }
}
