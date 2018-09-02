import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Producto} from '../../models/Producto.model';

import {ViewProductService} from '../../services/view-product-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ViewProductService]
})
export class ProductDetailComponent implements OnInit {

  public producto : Producto;

  public id_producto:number;

  constructor(
              private _view_product:ViewProductService,
              private _route:ActivatedRoute, 
              private _router:Router) { 



              }

  ngOnInit() {

    console.log ("componente detalles productos cargado");

    /*this.id_producto=this._view_product.id_producto;

    console.log(this.id_producto);*/

    
  }

 


  

}
