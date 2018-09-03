import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UploadFileService } from '../../services/upload-file.service';
import {_GLOBAL} from '../../services/global.service';
import {ProductosService} from '../../services/productos.service';/*to get product by id and pass it to the product to update,
then we show old data on form */ 


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers:[UploadFileService, ProductosService]
})
export class EditProductComponent implements OnInit {

  private _productToUpdate: Producto;
 
  private _id_producto: number;
  
  private _title: string;
  
  private _url: string;
 

  constructor(

                private _httpclient:HttpClient,
                private _route:ActivatedRoute,
                private _router:Router,
                public _uploadFile:UploadFileService,
                private _productosService:ProductosService


  ) {
        this.productToUpdate=new Producto("","","","");
        this.id_producto=0;
        this.title="Update this product";
        this.url=_GLOBAL.url;
      


   }

  ngOnInit() {

    this.getIdOfProduct();

    this._productosService.getProductById(this.id_producto).then( (response) =>{

         this.productToUpdate.nombre=response["nombre"]; /*to ensure data is passed only when getProductById operations are finished, we
         use the promise*/

          this.productToUpdate.precio=response["precio"];

          this.productToUpdate.descripcion=response["descripcion"];

      },
      (error)=>
      {
        console.log (error);
      }
    
    );


   


  }

  getIdOfProduct()
    {
        this._route.params.subscribe( (response)=>{
            this.id_producto= response.id;
        });
    }


  updateProduct()
  {
      //este llevara el upload file, que devuelva promesa, y luego haremos el resto
    
    
   


     // console.log(this.id_producto);



      let headers = new HttpHeaders();

      headers.set( 'Content-Type', 'application/x-www-form-urlencoded' );

      let httpOptions={headers};//the way to do it with httpClient Module


      this._uploadFile.uploadFile(`${this.url}/upload-file`,[],this._uploadFile.filesToUpload).then(

        (response)=>
        {
            //console.log (response);

            this.productToUpdate.imagen=response["complete_name"];

           /* console.log("el objeto es" );
            console.log(this.productToUpdate);*/

            this._httpclient.post(`${this.url}/productos/${this.id_producto}`,this.productToUpdate,httpOptions)
            .subscribe((response)=>{

                //console.log(response);
                this._router.navigate(['/view-product',this.id_producto]);
              },
              (error)=>{
                console.log(error);
              }
            );
        },
        (error)=>
        {
            console.log(error);
        }


      );

    
  }//update product

  /*getters and setters*/

  public get productToUpdate(): Producto {
    return this._productToUpdate;
  }
  public set productToUpdate(value: Producto) {
    this._productToUpdate = value;
  }



  public get id_producto(): number {
    return this._id_producto;
  }
  public set id_producto(value: number) {
    this._id_producto = value;
  }



  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }


  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

}
