import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import {Producto} from '../models/Producto.model';//model of the object
import {_GLOBAL} from './global.service';
import {Observable } from 'rxjs';
import { resolve } from '../../../node_modules/@types/q';




@Injectable()

export class ProductosService{


    public url:string;

    public imageServerUrl:string;

    public arrayListProducts:any[];

    public isError:boolean;

    public producto:Producto;

   


    constructor(private _http:Http){
        this.url=_GLOBAL.url;

        this.imageServerUrl=_GLOBAL.imageServerUrl;

        this.arrayListProducts=[];

        this.isError=false;/*to show text if suc. connection or not*/
        
    }

    getProductos()
    {
        this._http.get(`${this.url}/productos`).pipe(

            map(
                
                (res)=>{

                    return res.json();/*this convert the response into json usable object*/

                },
                (err)=>
                {
                    return err;
                }
        
        
        
        
            )


        ).subscribe(
            (response)=>{
                console.log(response);

                this.arrayListProducts=response;

                //console.log(this.arrayListProducts);
            },
            (error)=>
            {
                this.isError=true;
                console.log (error);
            }
    
    
    
    
        );
    }

    getProductById(p_id_producto)
    {
       return new Promise( (resolve, reject) =>{


        this._http.get(`${this.url}/productos/${p_id_producto}`).pipe(

            map(
                
                (res)=>{

                    return res.json();/*this convert the response into json usable object*/

                },
                (err)=>
                {
                    return err.json();
                }
        
        
        
        
            )


        ).subscribe(
            (response)=>{
                //console.log(response);

                
                resolve(response.message);/*because the data we want is on the object.message*/

               
                //console.log (this.getProductByIdResponse);
                //console.log(this.arrayListProducts);
            },
            (error)=>
            {
               
                console.log (error);
                reject(error);
            }
    
    
    
    
        );//subscribe


       } );//end promise
    
       
       
        

    }//end get product


}//end service