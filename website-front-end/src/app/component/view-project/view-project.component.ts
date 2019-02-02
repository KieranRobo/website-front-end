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

  project : Project

  constructor(private api : APIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.retrieveProject(params['link']);
      
    })
  }

  retrieveProject(linkName) {
    this.api.getProject
  }

}
