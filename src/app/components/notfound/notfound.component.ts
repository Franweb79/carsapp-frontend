import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  private title:string;

  
  constructor() { 

    this.setTitle("404 NOT FOUND");
  }

  ngOnInit() {
  }

    //setters and getters

    public setTitle(p_title:string){

      this.title=p_title;
    }
  
    public getTitle(){
      return this.title;
    }

}
