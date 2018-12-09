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
    return this.http.get("/api/project/all").pipe(
      map((res:Response)=> res));
  }

  deleteProject(pageId : number) {
    return this.http.delete("/api/project/remove?id=" + pageId);
  }
}
