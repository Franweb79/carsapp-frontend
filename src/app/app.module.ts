import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AppRoutingModule} from './app-routing';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import{appRoutingProviders} from './app-routing';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllproductsComponent,
    CreateproductComponent,
    NotfoundComponent,
    ProductDetailComponent,
    EditProductComponent,
    DeleteProductComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
