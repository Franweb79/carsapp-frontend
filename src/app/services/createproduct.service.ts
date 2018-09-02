import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Router, ActivatedRoute,Params} from '@angular/router';

import {map} from 'rxjs/operators';
import {_GLOBAL} from './global.service';
import {Observable} from 'rxjs';
import {Producto} from '../models/Producto.model';
import {UploadFileService} from './upload-file.service';


@Injectable()

export class CreateProductService{

    public url:string;
    public errorMessage:string;
    public productToInsert:Producto;
    public imageData:string;
   // public id_producto:number; AUTO INCREMENT
   

    constructor(
                    private _http:Http,
                    private _route:ActivatedRoute, 
                    private _router:Router,
                    private _uploadFile:UploadFileService
                )
    {
       
       
        this.url=_GLOBAL.url;
        this.errorMessage="";
      
        this.productToInsert=new Producto("","","","");
      
    }//end constructor


    test()
    {
        console.log("hola");
    }
    createProduct()
    {
        
        

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        let options = new RequestOptions({ headers: headers });

        
        /*let json={ 
            "nombre":p_pr,
            "descripcion":p_descripcion,
            "precio":p_precio,
            "imagen":p_imagen
        };*/

       //let jsonString=JSON.stringify(json);
       
      /* console.log(json);

       console.log(jsonString);*/

      
       
       
       this._uploadFile.uploadFile(`${this.url}/upload-file`,[],this._uploadFile.filesToUpload).then(

            (result)=>{
                //console.log(result["complete_name"]);
                this.productToInsert.imagen=result["complete_name"];


                this._http.post(`${this.url}/crear-producto`,this.productToInsert,options).pipe(
            
            
                    map(
                        
                        (res)=>{
        
        
                           this.productToInsert.descripcion="";//to make counter on description field set to 0 when submitted
                            
                           //console.log ("res del callback del map" + res);
                           
                           return res.json();
        
                        },(err)=>{
        
                            this.productToInsert.descripcion="";//to make counter on description field set to 0 when submitted
        
                            return err;
        
                        }
                    
                    
                    )
                       
        
        
                ) .subscribe(
        
                    (response)=>
                    {
                        //console.log("resp del suscribe" + response);
                        this._router.navigate(['/all-products']);
                      
        
                    },
                    (error)=>
                    {
                     
        
                       console.log(error);
                        // console.log(error);
                    }
        
                );

                
            },
            (error)=>{
                console.log(error);

            }

       );

       


        
       
    }

}