import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hideSpinner : boolean = true;

  projectId : number;
  project : Project;

  constructor(private api : APIService, private route: ActivatedRoute) { 
    this.project = new Project();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];

      this.parseProject();
      
    })
  }

  parseProject() {
    this.hideSpinner = false;
    this.api.getProject(this.projectId).subscribe(resp => {
      var data = resp.body;

      this.project.id = data['id'];
      this.project.title = data['name'];
      this.project.linkName = data['symLink'];
      this.project.dateCreated = data['dateCreated'];
      this.project.lastModified = data['lastModified'];
      this.project.content = data['content'];

      this.hideSpinner = true;
    })
  }

}
