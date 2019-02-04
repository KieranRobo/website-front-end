import { Component, OnInit, Inject } from '@angular/core';
import { Project } from 'src/app/models/project';
import { APIService } from 'src/app/api.service';
import { APIResponse } from 'src/app/models/api-response';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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
    public dialog: MatDialog
    ) { 
  }

  ngOnInit() {
    this.refreshPages();

    
  }

  refreshPages() {
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

  deleteProject(deletedProject : Project) {
    let dialogRef = this.dialog.open(DeleteProjectDialog, {
      data: deletedProject});
    
    dialogRef.afterClosed().subscribe(result => {
      if (result == "confirm" ) {
        this.apiResponse = null;
        this.hideSpinner = false;

        this.api.deleteProject(deletedProject.id).subscribe(resp => {
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
    });
    
  }


}


@Component({
  selector: 'your-dialog',
  templateUrl: 'view.delete-dialog.html',
})
export class DeleteProjectDialog {
  constructor(public dialogRef: MatDialogRef<DeleteProjectDialog>,
     @Inject(MAT_DIALOG_DATA) public project: Project, @Inject(MAT_DIALOG_DATA) public parent: ViewComponent) { }

  confirmDelete() {
    this.dialogRef.close('confirm');
  }
}
