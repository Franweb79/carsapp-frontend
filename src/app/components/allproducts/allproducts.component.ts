import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {ProductosService} from '../../services/productos.service';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
  providers:[ProductosService]
})
export class AllproductsComponent implements OnInit {

  private _title:string;

  private _deleteThisObjectConfirm:number;



  constructor(private _route:ActivatedRoute, 
              private _router:Router,
              public _productos:ProductosService) {

    this.title="Product list";/*we are using the setter, not assigning the property!!*/
    this.deleteThisObjectConfirm=0;
    this._productos.url;
   // this._productos.imageServerUrl;

   }



  ngOnInit() {

    this._productos.getProductos();
  }


  

  public showConfirmationToDelete(p_id_producto){
    this.deleteThisObjectConfirm=p_id_producto;

    console.log(this.deleteThisObjectConfirm);

  }

  /*when click no, on delete confirmation*/
  public cancelConfirmationToDelete()
  {
    this.deleteThisObjectConfirm=0;
  }

  //setters and getters

  public set title(p_title:string){

    this._title=p_title;
  }

  public get title(){
    return this._title;
  }

  public set deleteThisObjectConfirm(p_isConfirmed:number)
  {
    this._deleteThisObjectConfirm=p_isConfirmed;
  }

  public get deleteThisObjectConfirm()
  {
    return this._deleteThisObjectConfirm;
  }

}



