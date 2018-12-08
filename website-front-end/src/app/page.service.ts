import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Page } from './models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getPages() {
    return this.http.get("/api/pages/all").pipe(
      map((res:Response)=> res));
  }

  deletePage(pageId : number) {
    return this.http.delete("/api/pages/remove?id=" + pageId);
  }
}
