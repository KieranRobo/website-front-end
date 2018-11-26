import { Component, OnInit } from '@angular/core';
import { ContactMessage } from 'src/app/models/contact-message';
import { FormGroup } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(1);

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() {
    
   }

  newHero() {
    console.log("new here");
    this.model = new Hero(42);
  }


  ngOnInit() {
    }
    //let contactMessage : ContactMessage = new ContactMessage("kieranrobertson1@gmail.com", "Kieran Robertson", "Hey there");

    //console.log("from: " + contactMessage.fromEmail);


    get diagnostic() { return JSON.stringify(this.model); }
  }


