import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(
    private pageService : PageService
    ) { 
  }

  ngOnInit() {
    
    /*
    let page : Page = this.pageService.getPages();
    
    this.pageService.getPages().subscribe((response) => {
      console.log("toString: " + response.toString());
      console.log("json: " + response.stringify);
    })
    */
    this.pageService.getPages().subscribe((response) => {
      /*
      for(let i=0; i<response.data.length; i++) {
        let page : Page = new Page(
          response[i]['id'],
          response[i]['name'],
          response[i]['data']);
  
          console.log("Page ID: " + page.id);
          console.log("Page Name: " + page.name);
          console.log("Page Data: " + page.data);
      }
      */
     
      let page : Page = new Page(
        response['id'],
        response['name'],
        response['data']);

        console.log("Page ID: " + page.id);
        console.log("Page Name: " + page.name);
        console.log("Page Data: " + page.data);
    });
    
    
  }

}
