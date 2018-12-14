import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ProjectsComponent implements OnInit {

  hideSpinner : boolean = false;
  private allProjects : Project[] = [];

  constructor(
    private api : APIService,
    
    ) { 
  }

  ngOnInit() {
    this.refreshPages();
  }

  refreshPages() {
    this.hideSpinner = false;
    this.allProjects = [];
    this.api.getProjects().subscribe(data => {
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
      this.hideSpinner = true;
    });
  }

  deleteProject(pageId : number) {
    console.log("deleting page " + pageId);
    this.api.deleteProject(pageId).subscribe(data => {
      this.refreshPages();
    })
    
  }

}
