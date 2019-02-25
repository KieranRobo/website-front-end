import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';

import 'rxjs/add/operator/map'
import { APIResponse } from 'src/app/models/api-response';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  hideSpinner : boolean = true;
  loaded: boolean = false;

  submissionResponse : APIResponse;

  titleError : String;
  linkError : String;
  displayImageError : String;
  contentError : String;

  newProject : Project;

  constructor(private api : APIService) { }

  ngOnInit() {
    this.newProject = new Project();
    this.loaded = true;
  }

  createProject() {
    this.submissionResponse = null;
    if (this.isFormValid()) {
      this.hideSpinner = false;
      this.api.createProject(this.newProject).subscribe(resp => {
        
        this.submissionResponse = new APIResponse(resp.status, "body", resp.url);
        if (this.submissionResponse.responseCode == 200) {
          this.submissionResponse.successStatus = true;
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
    if (!this.isDisplayImageValid()) formValid = false;
    if (!this.isContentValid()) formValid = false;

    return formValid;
  }

  isTitleValid() {
    if (this.newProject.title.length < 5 || this.newProject.title.length > 50) {
      this.titleError = "Must be between 5 and 50 characters.";
      return false;
    } else {
      this.titleError = null;
      return true;
    }
  }

  isLinkValid() {
    if (this.newProject.linkName.length < 3 || this.newProject.linkName.length > 20) {
      this.linkError = "Must be between 3 and 20 characters.";
      return false;
    } else {
      this.linkError = null;
      return true;
    }
  }

  isDisplayImageValid() {
    if (this.newProject.displayImage.length == 0) {
      this.displayImageError = "Cannot be left empty.";
      return false;
    } else {
      this.displayImageError = null;
      return true;
    }
  }

  isContentValid() {
    if (this.newProject.content.length == 0) {
      this.contentError = "This project doesn't have any content!";
      return false;
    } else {
      this.contentError = null;
      return true;
    }
  }

}
