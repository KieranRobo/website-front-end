import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIResponse } from 'src/app/models/api-response';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideSpinner : boolean = false;
  allProjects : Project[] = [];

  apiResponse : APIResponse;

  constructor(private api : APIService) { }

  ngOnInit() {
    this.retrieveProjects();
  }

  retrieveProjects() {
    
    this.apiResponse = null;
    this.hideSpinner = false;
    
    
    this.api.getProjects().subscribe(resp => {
      this.allProjects = [];
      var data = resp.body;

      for (let i in data) {
        this.allProjects.push(new Project(
          data[i]['id'],
          data[i]['name'],
          data[i]['symLink'],
          data[i]['displayImage'],
          data[i]['dateCreated'],
          data[i]['lastModified'],
          data[i]['content']
          ));
      }
      this.apiResponse = new APIResponse(resp.status, "body", resp.url);
          if (this.apiResponse.responseCode == 200) {
            this.apiResponse.successStatus = true;
          } else {
            this.apiResponse.successStatus = false;
          }
      this.hideSpinner = true;
    },
    err => {
      this.apiResponse = new APIResponse(err.status, "body", err.url, false);
      this.hideSpinner = true;
    });
  }

}
