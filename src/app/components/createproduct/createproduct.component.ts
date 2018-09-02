import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {CreateProductService} from '../../services/createproduct.service';
import {Producto} from '../../models/Producto.model';
import {UploadFileService} from '../../services/upload-file.service';



@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
  providers:[CreateProductService,UploadFileService]
})
export class CreateproductComponent implements OnInit {

  //public productToInsert:Producto;

  private _title: string;
 
 
  constructor(
             private _createProduct:CreateProductService,
             private _uploadFile:UploadFileService) { 

              this.title="Create new product";

            //  this.productToInsert=new Producto("bucerca","asdasdasdasdasdrew","200","img");
             }

  ngOnInit() {

    
  }

  /*getters and setters*/

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }


}
