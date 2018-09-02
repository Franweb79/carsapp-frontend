import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {HttpClient,HttpHeaders} from '@angular/common/http';


import {map} from 'rxjs/operators';
import {_GLOBAL} from './global.service';
import {Observable} from 'rxjs';
import {Producto} from '../models/Producto.model';

@Injectable()

export class DeleteProductService
{
    /*let´s make some refactoring despite teacher don´t do it*/
    
    public id_producto: number;


   
    constructor( private _httpclient:HttpClient,
                private _route:ActivatedRoute,
                private _router:Router,
                 ){



   }

   
   
    testDelete()
    {
        console.log ("deleted");
    }

    getIdOfProduct()
    {
        this._route.params.subscribe( (response)=>{
            this.id_producto=response.id;
        });
    }

    deleteProduct()
    {
        //un post con el id producto al backend

        let headers = new HttpHeaders();

        headers.set( 'Content-Type', 'application/x-www-form-urlencoded' );
  
        let httpOptions={headers};//the way to do it with httpClient Module

        this._httpclient.get(`${_GLOBAL.url}/delete-productos/${this.id_producto}`).subscribe(

            (response)=>
            {
                console.log (response);
                this._router.navigate(['/all-products']);
            },
            (error)=>
            {
                console.log (error);

            }
        );


    }
}