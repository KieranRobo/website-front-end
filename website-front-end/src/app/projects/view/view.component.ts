import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';
import { APIResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-home',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  hideSpinner : boolean = false;
  private allProjects : Project[] = [];

  apiResponse : APIResponse;

  constructor(
    private api : APIService,
    
    ) { 
  }

  ngOnInit() {
    this.refreshPages();
  }

  refreshPages() {
    this.apiResponse = null;
    this.hideSpinner = false;
    this.allProjects = [];
    
    this.api.getProjects().subscribe(resp => {
      var data = resp.body;
      for (let i in data) {
        this.allProjects.push(new Project(
          data[i]['id'],
          data[i]['name'],
          data[i]['symLink'],
          data[i]['dateCreated'],
          data[i]['lastModified'],
          data[i]['content']
          ));
      }
      console.log(data);
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

  deleteProject(pageId : number) {
    this.apiResponse = null;
    this.hideSpinner = false;

    this.api.deleteProject(pageId).subscribe(resp => {
      console.log(resp);
      this.refreshPages();

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
    })
    
  }

}
