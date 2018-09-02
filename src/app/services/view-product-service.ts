import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';


import {map} from 'rxjs/operators';
import {_GLOBAL} from './global.service';
import {Observable} from 'rxjs';
import {Producto} from '../models/Producto.model';

@Injectable()

export class ViewProductService
{

    public id_producto:number;
    public serverUrl:string;
    public imageServerUrl:string;
    public productoAMostrar:Producto;

    constructor(
        
        private _httpclient:HttpClient,
        private _route:ActivatedRoute,
        private _router:Router
    
    ) { 

       

        this.productoAMostrar=new Producto("","","","");
        this.getIdOfProduct();

        this.serverUrl=`${_GLOBAL.url}/productos/${this.id_producto}`;
        this.imageServerUrl=_GLOBAL.imageServerUrl;

        console.log(this.serverUrl);

        this.viewProduct(this.id_producto);


           
    
            

    }


    getIdOfProduct()
    {
        this._route.params.subscribe( (response)=>{
            this.id_producto= response.id;
        });
    }

    viewProduct(p_id_producto:number)
    {
        this._httpclient.get(this.serverUrl).subscribe(

            (response:any)=>
            {
                console.log ("resp ");
                console.log (response);
                
               

                if(response.responseCode==200)
                {
                    this.productoAMostrar=response.message;
                    console.log("el producto es");
                    console.log( this.productoAMostrar);

                }else{
                    this._router.navigate(['/all-products']);
                }
            },
            (err)=>
            {
                console.log ("err ");
                console.log (err);
            }



      );
  
    }



}