import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private title:string;


  constructor() {

    this.setTitle("Welcome to our cars selling (fake) webapp");
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
