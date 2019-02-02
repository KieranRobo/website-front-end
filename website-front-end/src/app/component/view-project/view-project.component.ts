import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  hideSpinner : boolean = true;

  project : Project = new Project()

  constructor(private api : APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hideSpinner = false;
    this.route.params.subscribe(params => {
      this.retrieveProject(params['link']);
      
    })
  }

  retrieveProject(linkName) {
    this.api.getProjectByLink(linkName).subscribe(resp => {
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
