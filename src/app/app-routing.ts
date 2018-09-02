import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';

//import components

import {HomeComponent} from './components/home/home.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import{ProductDetailComponent} from './components/product-detail/product-detail.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {DeleteProductComponent} from './components/delete-product/delete-product.component';



const appRoutes:Routes=[
    {
       path:'',
       redirectTo:'home',
       pathMatch:'full'

    },
    {
        path:'home',
        component:HomeComponent,
        pathMatch: 'full'
    },
    {
        path:'all-products',
        component:AllproductsComponent,
        pathMatch: 'full'
    },
    {
        path:'create-product',
        component:CreateproductComponent,
        pathMatch: 'full'
    },
    {
        path:'edit-product/:id',
        component:EditProductComponent,
        pathMatch:'full'
    },
    {
        path:'view-product/:id',
        component:ProductDetailComponent,
        pathMatch: 'full'
    },
    {
        path:'delete-product/:id',
        component:DeleteProductComponent,
        pathMatch: 'full'
    },
    {
        path:'**',
        component:NotfoundComponent,
        pathMatch: 'full'
    }
]

export const appRoutingProviders:any[]=[]; //más adelante es necesario

export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);


