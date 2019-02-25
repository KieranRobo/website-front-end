import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  hideSpinner : boolean = false;

  constructor() { 
  }

  ngOnInit() {}

}
