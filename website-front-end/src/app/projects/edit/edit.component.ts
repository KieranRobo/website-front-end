import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/api.service';
import { Project } from 'src/app/models/project';
import { APIResponse } from 'src/app/models/api-response';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  hideSpinner : boolean = true;
  formReady : boolean = false;

  submissionResponse : APIResponse;

  projectId : number;
  project : Project;

  titleError : String;
  linkError : String;
  contentError : String;

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
    this.api.getProjectById(this.projectId).subscribe(resp => {
      var data = resp.body;

      this.project.id = data['id'];
      this.project.title = data['name'];
      this.project.linkName = data['symLink'];
      this.project.dateCreated = data['dateCreated'];
      this.project.lastModified = data['lastModified'];
      this.project.content = data['content'];

      this.hideSpinner = true;
      this.formReady = true;
    })
  }

  editProject() {
    this.hideSpinner = false;
    if (this.isFormValid()) {
      this.hideSpinner = false;
      this.api.editProject(this.project).subscribe(resp => {
        this.submissionResponse = new APIResponse(resp.status, JSON.stringify(resp.body), resp.url);
        if (this.submissionResponse.responseCode == 200) {
          this.submissionResponse.successStatus = true;
          console.log(this.submissionResponse.responseBody);
        } else {
          this.submissionResponse.successStatus = false;
        }
        this.hideSpinner = true;
      },
      err => {
        this.submissionResponse = new APIResponse(err.status, "body", err.url, false);
        this.hideSpinner = true;
      }
      );
    }
  }

  isFormValid() {
    var formValid = true;
    if (!this.isTitleValid()) formValid = false;
    if (!this.isLinkValid()) formValid = false;
    if (!this.isContentValid()) formValid = false;

    return formValid;
  }

  isTitleValid() {
    if (this.project.title.length < 5 || this.project.title.length > 50) {
      this.titleError = "Must be between 5 and 50 characters.";
      return false;
    } else {
      this.titleError = null;
      return true;
    }
  }

  isLinkValid() {
    if (this.project.linkName.length < 3 || this.project.linkName.length > 20) {
      this.linkError = "Must be between 3 and 20 characters.";
      return false;
    } else {
      this.linkError = null;
      return true;
    }
  }

  isContentValid() {
    if (this.project.content.length == 0) {
      this.contentError = "This project doesn't have any content!";
      return false;
    } else {
      this.contentError = null;
      return true;
    }
  }

}
