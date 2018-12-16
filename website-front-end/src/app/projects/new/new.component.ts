import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProject : Project;
  constructor(private api : APIService) { }

  ngOnInit() {
    this.newProject = new Project();
  }

  createProject() {
    console.log("Title:" + this.newProject.title);
    console.log("Link Name:" + this.newProject.linkName);
    console.log("Content:" + this.newProject.content);
    this.api.createProject(this.newProject).subscribe();
  }

}
