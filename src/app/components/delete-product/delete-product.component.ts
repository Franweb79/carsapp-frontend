import { Component, OnInit } from '@angular/core';
import {DeleteProductService} from '../../services/delete-product-service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
  providers:[DeleteProductService]
})
export class DeleteProductComponent implements OnInit {

  constructor(private _deleteService:DeleteProductService) { }

  ngOnInit() {

    this._deleteService.testDelete();
    this._deleteService.getIdOfProduct();
    console.log(this._deleteService.id_producto);

    this._deleteService.deleteProduct();
  }

}
