import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Page } from './models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getPages() {
    return this.http.get("http://kieranrobertson.com/api/pages/details?id=2")
    .map((res : Page) => res)
  }
}
