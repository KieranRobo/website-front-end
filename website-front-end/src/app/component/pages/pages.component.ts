import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  hideSpinner : boolean = false;
  private allPages : Page[] = [];

  constructor(
    private pageService : PageService,
    
    ) { 
  }

  ngOnInit() {
    this.pageService.getPages().subscribe(data => {
      for (let i in data) {
        var pageId = data[i]['id'];
        var pageName = data[i]['name'];
        var pageData = data[i]['data'];
        this.allPages.push(new Page(pageId, pageName, pageData));
        
      }
      this.hideSpinner = true;
    });
  }

  logAllPages() {
    console.log("loggin");
    this.allPages.forEach((element) => {
      console.log("ID:" + element.id + " Name:" + element.name + " Data:" + element.data);
    });
  }

}
