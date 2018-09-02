import {Injectable, Input} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Router, ActivatedRoute,Params} from '@angular/router';

import {map} from 'rxjs/operators';
import {_GLOBAL} from './global.service';
import {Observable} from 'rxjs';
import {Producto} from '../models/Producto.model';

import * as $ from 'jquery';


@Injectable()

export class UploadFileService
{
   public url:string;
   public filesToUpload:Array<File>;


   
    constructor()
   {
        this.url=_GLOBAL.url;
        this.filesToUpload=[];
   }
   
   
    uploadFile(url:string, params:Array<string>,filesToUpload:Array<File>)
    {
       return new Promise((resolve, reject)=>{

            var formData:any= new FormData();

            var asyncRequest=new XMLHttpRequest();

            for(var i=0; i<filesToUpload.length;++i)
            {
                formData.append('filesUploaded[]',filesToUpload[i],filesToUpload[i].name);
            }

            asyncRequest.onreadystatechange=function(){
                if(asyncRequest.readyState==4){
                    if(asyncRequest.status==200){
                        resolve(JSON.parse(asyncRequest.response));
                    }else{
                        reject(asyncRequest.response);
                    }
                }
            }

            asyncRequest.open('POST',url,true);

            asyncRequest.send(formData);
       });
    }

   

    fileChangeEvent(ElementObjectReferenceWhichTriggersEvent:any)// in this case, the input type="file"
    {
        this.filesToUpload=<Array<File>>ElementObjectReferenceWhichTriggersEvent.target.files;//captura los archivos mandados en el input

        console.log(ElementObjectReferenceWhichTriggersEvent.target);

        console.log(ElementObjectReferenceWhichTriggersEvent.target.files[0]);

        console.log(this.filesToUpload);

       // return this.filesToUpload;
    }

    myClickHandler(event)
    {
        console.log(event.target);
        console.log("hola, clickeado");
    }
}